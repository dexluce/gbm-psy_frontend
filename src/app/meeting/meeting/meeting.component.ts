import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MeetingGQL, Meeting, MeetingQuery } from 'src/generated/graphql';
import { take, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingService } from '../meeting.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit, OnDestroy {
  meeting: Meeting;
  error: '';
  jitsiClient;
  @Input() meetingId: string;
  @ViewChild('meet') meet: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private meetingGqlService: MeetingGQL,
    private router: Router,
    private meetingService: MeetingService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      take(1),
      tap((params) => {
        this.meetingGqlService.fetch({ id: params.get('id') }).pipe(take(1)).subscribe(
          res => {
            this.meeting = res.data.meeting as Meeting;
            // Now that we have a meeting, we can initiate jitsi meet
            this.initializeMeeting();
          },
          err => this.error = err,
        );
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.jitsiClient.removeEventListener('videoConferenceLeft');
    this.jitsiClient.dispose();
  }

  private initializeMeeting() {
    this.jitsiClient = this.meetingService.getJitsiClient(this.meeting, this.meet.nativeElement);
    this.jitsiClient.addEventListener('videoConferenceLeft', (obj) => {
      this.router.navigate(['/']);
    });
  }
}

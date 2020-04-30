import { Component, OnInit, Input } from '@angular/core';
import { MeetingsInEvenementGQL, Role } from 'src/generated/graphql';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-meetings-in-evenement',
  templateUrl: './meetings-in-evenement.component.html',
  styleUrls: ['./meetings-in-evenement.component.scss']
})
export class MeetingsInEvenementComponent implements OnInit {
  appRoles = Role;
  meetings;
  error = '';
  @Input() evenementId: string;

  constructor(private meetingsInEvenement: MeetingsInEvenementGQL) { }

  ngOnInit(): void {
    this.meetingsInEvenement.fetch({ evenementId: this.evenementId }).pipe(take(1)).subscribe(
      res => this.meetings = res.data.meetingsInEvenement,
      err => this.error = err,
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { MeetingsInEvenementGQL } from 'src/generated/graphql';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-meetings-in-evenement',
  templateUrl: './meetings-in-evenement.component.html',
  styleUrls: ['./meetings-in-evenement.component.scss']
})
export class MeetingsInEvenementComponent implements OnInit {
  meetings;
  error = '';
  @Input() evenementId: string;

  constructor(private meetingsInEvenement: MeetingsInEvenementGQL) { }

  ngOnInit(): void {
    this.meetingsInEvenement.fetch({ evenementId: this.evenementId }).pipe(take(1)).subscribe(
      res => this.meetings = res.data.meetingsForEvenement,
      err => this.error = err,
    );
  }

}

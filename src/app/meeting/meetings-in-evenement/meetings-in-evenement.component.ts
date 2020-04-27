import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meetings-in-evenement',
  templateUrl: './meetings-in-evenement.component.html',
  styleUrls: ['./meetings-in-evenement.component.scss']
})
export class MeetingsInEvenementComponent implements OnInit {
  @Input() evenementId: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MeetingGQL, MeetingQuery, RefreshVirtualRoomGQL, MeetingQueryVariables, Role, MeetingFragment } from 'src/generated/graphql';
import { take, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meeting-tile',
  templateUrl: './meeting-tile.component.html',
  styleUrls: ['./meeting-tile.component.scss']
})
export class MeetingTileComponent implements OnInit, OnDestroy {
  @Input() meetingId: string;
  subscription: Subscription;
  meeting: MeetingFragment;
  appRoles = Role;

  constructor(
    private meetingGql: MeetingGQL,
    private refreshVirtualRoomGql: RefreshVirtualRoomGQL,
  ) { }

  ngOnInit(): void {
    this.subscription = this.meetingGql.watch({ id: this.meetingId }).valueChanges.pipe(
      map(({ data: { meeting } }) => meeting)
    ).subscribe(meeting => this.meeting = meeting);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  refreshVirtualRoom() {
    this.refreshVirtualRoomGql.mutate({meetingId: this.meetingId}, {
      update: (store, { data: { refreshVirtualRoom }}) => {
        const data = store.readQuery<MeetingQuery, MeetingQueryVariables>({
          query: this.meetingGql.document,
          variables: { id: this.meetingId }
        });
        data.meeting = refreshVirtualRoom;
        store.writeQuery({query: this.meetingGql.document, variables: { id: this.meetingId }, data});
      }
    }).pipe(take(1)).subscribe();
  }
}

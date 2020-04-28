import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsInEvenementComponent } from './meetings-in-evenement/meetings-in-evenement.component';
import { MaterialModule } from '../material.module';
import { CreateMeetingTileComponent } from './create-meeting-tile/create-meeting-tile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingComponent } from './meeting/meeting.component';
import { RouterModule } from '@angular/router';

declare var JitsiMeetExternalAPI: any;

@NgModule({
  declarations: [MeetingsInEvenementComponent, CreateMeetingTileComponent, MeetingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MeetingsInEvenementComponent,
  ]
})
export class MeetingModule { }

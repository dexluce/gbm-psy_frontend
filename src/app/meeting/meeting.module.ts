import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CreateMeetingTileComponent } from './create-meeting-tile/create-meeting-tile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingComponent } from './meeting/meeting.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { MeetingTileComponent } from './meeting-tile/meeting-tile.component';

declare var JitsiMeetExternalAPI: any;

@NgModule({
  declarations: [
    CreateMeetingTileComponent,
    MeetingComponent,
    MeetingTileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    AuthModule,
  ],
  exports: [
    MeetingTileComponent,
    CreateMeetingTileComponent,
  ]
})
export class MeetingModule { }

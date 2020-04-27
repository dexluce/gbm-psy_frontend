import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsInEvenementComponent } from './meetings-in-evenement/meetings-in-evenement.component';
import { MaterialModule } from '../material.module';
import { CreateMeetingTileComponent } from './create-meeting-tile/create-meeting-tile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [MeetingsInEvenementComponent, CreateMeetingTileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    MeetingsInEvenementComponent,
  ]
})
export class MeetingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsInEvenementComponent } from './meetings-in-evenement/meetings-in-evenement.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [MeetingsInEvenementComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MeetingsInEvenementComponent,
  ]
})
export class MeetingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { CoreModule } from '../core/core.module';
import { CreateEvenementComponent } from './create-evenement/create-evenement.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EventComponent } from './event/event.component';
import { MeetingModule } from '../meeting/meeting.module';
import { AuthModule } from '../auth/auth.module';
import { EvenementActionsMenuComponent } from './evenement-actions-menu/evenement-actions-menu.component';

@NgModule({
  declarations: [
    EventListComponent,
    CreateEvenementComponent,
    EventComponent,
    EvenementActionsMenuComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    CKEditorModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MeetingModule,
    AuthModule
  ],
  providers: [
  ],
})
export class EventModule { }

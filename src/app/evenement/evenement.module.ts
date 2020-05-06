import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { CoreModule } from '../core/core.module';
import { CreateEvenementComponent } from './create-evenement/create-evenement.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EvenementComponent } from './evenement/evenement.component';
import { MeetingModule } from '../meeting/meeting.module';
import { AuthModule } from '../auth/auth.module';
import { EvenementActionsMenuComponent } from './evenement-actions-menu/evenement-actions-menu.component';

@NgModule({
  declarations: [
    EvenementListComponent,
    CreateEvenementComponent,
    EvenementComponent,
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
export class EvenementModule { }

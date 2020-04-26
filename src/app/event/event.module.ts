import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { CoreModule } from '../core/core.module';
import { CreateEvenementComponent } from './create-evenement/create-evenement.component';

@NgModule({
  declarations: [
    EventListComponent,
    CreateEvenementComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
  ],
  providers: [
  ],
})
export class EventModule { }

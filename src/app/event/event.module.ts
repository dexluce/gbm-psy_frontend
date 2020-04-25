import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './event.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    EventListComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
  ],
  providers: [
    EventService,
  ],
})
export class EventModule { }

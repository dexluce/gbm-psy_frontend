import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
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
  ],
})
export class EventModule { }

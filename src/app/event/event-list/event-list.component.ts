import { Component } from '@angular/core';
import { Evenement } from 'src/generated/graphql';
import { PaginatedDatasourceFactory } from 'src/app/core/app-datatable/paginated-datasource.factory';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  displayedColumns = ['title', 'description'];
  datasource;

  // constructor(public evenementsGql: EvenementsGQL) {
  //   const datasource = PaginatedDatasourceFactory<Evenement>(evenementsGql, 'evenements');
  //   this.datasource = new datasource();
  // }
}

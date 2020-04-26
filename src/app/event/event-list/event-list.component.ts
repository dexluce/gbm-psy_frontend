import { Component } from '@angular/core';
import { Evenement, EvenementGQL } from 'src/generated/graphql';
import { PaginatedDatasource } from 'src/app/core/app-datatable/paginated-datasource';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  displayedColumns = ['title', 'description'];
  datasource: PaginatedDatasource<Evenement>;

  constructor(public evenementsGql: EvenementGQL) {
    this.datasource = new PaginatedDatasource<Evenement>(evenementsGql);
  }
}

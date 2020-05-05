import { Component } from '@angular/core';
import { Evenement, EvenementsGQL } from 'src/generated/graphql';
import { PaginatedDatasource } from 'src/app/core/app-datatable/paginated-datasource';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  displayedColumns = ['title', 'isActive', 'isPublic', 'actions'];
  datasource: PaginatedDatasource<Evenement>;

  constructor(public evenementsGql: EvenementsGQL) {
    this.datasource = new PaginatedDatasource<Evenement>(evenementsGql);
  }

  columnToReadable(column: string) {
    switch (column) {
      case 'title':
        return 'Titre';

      case 'isActive':
        return 'active';

      case 'isPublic':
        return 'Public';

      default:
        return column;
    }
  }
}

import { Component } from '@angular/core';
import { UsersGQL, User } from 'src/generated/graphql';
import { PaginatedDatasource } from 'src/app/core/app-datatable/paginated-datasource';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns = ['firstname', 'lastname', 'email', 'role', 'actions'];
  datasource: PaginatedDatasource<User>;

  constructor(public usersQql: UsersGQL) {
    this.datasource = new PaginatedDatasource<User>(usersQql);
  }

  columnToReadable(column: string) {
    switch (column) {
      case 'firstname':
        return 'Prénom';

      case 'lastname':
        return 'nom';

      case 'email':
        return 'Couriel';

      case 'role':
        return 'Role';

      default:
        return '-';
    }
  }
}

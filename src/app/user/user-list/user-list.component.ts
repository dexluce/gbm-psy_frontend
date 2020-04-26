import { Component } from '@angular/core';
import { UsersGQL, User } from 'src/generated/graphql';
import { PaginatedDatasource } from 'src/app/core/app-datatable/paginated-datasource';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns = ['firstname', 'lastname', 'email'];
  datasource: PaginatedDatasource<User>;

  constructor(public usersQql: UsersGQL) {
    this.datasource = new PaginatedDatasource<User>(usersQql);
  }
}

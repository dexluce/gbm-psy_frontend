import { Component } from '@angular/core';
import { UsersGQL, User } from 'src/generated/graphql';
import { PaginatedDatasourceFactory } from 'src/app/core/app-datatable/paginated-datasource.factory';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns = ['firstname', 'lastname', 'email'];
  datasource;

  constructor(public usersQql: UsersGQL) {
    const datasource = PaginatedDatasourceFactory<User>(usersQql, 'users');
    this.datasource = new datasource();
  }
}

import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserListComponent } from './user/user-list/user-list.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { CreateEvenementComponent } from './event/create-evenement/create-evenement.component';
import { EventComponent } from './event/event/event.component';
import { MeetingComponent } from './meeting/meeting/meeting.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'events',
        children: [
          {
            path: 'create',
            component: CreateEvenementComponent,
          },
          {
            path: ':id',
            component: EventComponent
          },
          {
            path: '',
            component: EventListComponent,
          },
        ]
      },
      {
        path: 'meeting/:id',
        component: MeetingComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/admin/events',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

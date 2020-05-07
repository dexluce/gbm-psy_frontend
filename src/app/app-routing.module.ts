import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserListComponent } from './user/user-list/user-list.component';
import { CreateEvenementComponent } from './evenement/create-evenement/create-evenement.component';
import { MeetingComponent } from './meeting/meeting/meeting.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EvenementComponent } from './evenement/evenement/evenement.component';
import { EvenementListComponent } from './evenement/evenement-list/evenement-list.component';
import { CreateSubscriptionToEvenementComponent } from './subscription-to-evenement/create-subscription-to-evenement/create-subscription-to-evenement.component';


const routes: Routes = [
  {
    path: 'signin',
    component: CreateUserComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        children: [
          {
            path: 'create',
            component: CreateUserComponent,
          },
          {
            path: '',
            component: UserListComponent,
          },
        ]
      },
      {
        path: 'evenement',
        children: [
          {
            path: 'create',
            component: CreateEvenementComponent,
          },
          {
            path: ':id',
            component: EvenementComponent
          },
          {
            path: '',
            component: EvenementListComponent,
          },
        ]
      },
      {
        path: 'meeting/:id',
        component: MeetingComponent
      },
      {
        path: 'subscription',
        children: [
          {
            path: 'create',
            component: CreateSubscriptionToEvenementComponent,
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/admin/evenement',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

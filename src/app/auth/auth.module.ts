import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { IfHasRoleDirective } from './if-has-role.directive';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    IfHasRoleDirective,
    LogoutComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    IfHasRoleDirective,
  ]
})
export class AuthModule { }

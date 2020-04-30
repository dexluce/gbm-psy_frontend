import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { IfHasRoleDirective } from './if-has-role.directive';

@NgModule({
  declarations: [
    LoginComponent,
    IfHasRoleDirective,
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
  imports: [
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

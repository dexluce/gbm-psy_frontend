import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CoreModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
  ],
})
export class UserModule { }

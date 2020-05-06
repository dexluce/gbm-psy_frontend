import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDatatableComponent } from './app-datatable/app-datatable.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getFrenchPaginatorIntl } from './app-datatable/fr-paginator-intl';
import { ClickPreventPropagationDirective } from './click-prevent-propagation.directive';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [AppDatatableComponent, ClickPreventPropagationDirective],
  providers: [
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() },
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AuthModule
  ],
  exports: [
    AppDatatableComponent,
    ClickPreventPropagationDirective,
  ],
})
export class CoreModule { }

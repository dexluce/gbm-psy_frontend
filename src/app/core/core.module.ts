import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDatatableComponent } from './app-datatable/app-datatable.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getFrenchPaginatorIntl } from './app-datatable/fr-paginator-intl';

@NgModule({
  declarations: [AppDatatableComponent],
  providers: [
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() },
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    AppDatatableComponent,
  ],
})
export class CoreModule { }

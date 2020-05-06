import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
  OnDestroy} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { PaginatedDatasource } from './paginated-datasource';
import { PaginableRessource, Role } from 'src/generated/graphql';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-datatable',
  templateUrl: './app-datatable.component.html',
  styleUrls: ['./app-datatable.component.scss'],
})
export class AppDatatableComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  appRoles = Role;
  @Input() dataSource: PaginatedDatasource<PaginableRessource[]>;
  @Input() displayedColumns: string[] = [];

  @Output() createClicked = new EventEmitter<MouseEvent>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') filter: ElementRef;
  @ViewChild(MatTable, { static: true }) table: MatTable<PaginableRessource[]>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.dataSource.load({
      filter: '',
      orderBy: '',
      orderOrder: 'ASC',
      pageNumber: 0,
      pageSize: 10
    });
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.loadData())
    ).subscribe();
  }

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
  }

  ngOnDestroy() {
    this.paginator.page.unsubscribe();
  }

  loadData() {
    this.dataSource.load({
      filter: this.filter.nativeElement.value,
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
    });
  }

  onRowClicked(row) {
    this.router.navigate([row.id], { relativeTo: this.route });
  }

  onCreateClicked() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}

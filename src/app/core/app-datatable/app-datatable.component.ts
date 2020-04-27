import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datatable',
  templateUrl: './app-datatable.component.html',
  styleUrls: ['./app-datatable.component.scss'],
})
export class AppDatatableComponent implements OnInit, AfterViewInit {
  @Input() dataSource;
  @Input() displayedColumns: string[] = [];

  @Output() createClicked = new EventEmitter<MouseEvent>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') filter: ElementRef;

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
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      tap(() => this.loadData())
    )
    .subscribe();
  }

  loadData() {
    this.dataSource.load({
      filter: this.filter.nativeElement.value,
      orderBy: this.sort.active,
      orderDirection: this.sort.direction === 'asc' ? 'ASC' : 'DESC',
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

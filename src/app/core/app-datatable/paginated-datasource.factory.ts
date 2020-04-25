import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap, take, finalize, map } from 'rxjs/operators';
import { Query } from 'apollo-angular';

export function PaginatedDatasourceFactory<T>(query: Query, keyName: string) {
  class PaginatedDatasource implements DataSource<T> {
    private listSubject = new BehaviorSubject<T[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private totalSubject = new BehaviorSubject<number>(1);

    public loading = this.loadingSubject.asObservable();
    public total = this.totalSubject.asObservable();

    connect(): Observable<T[]> {
      return this.listSubject.asObservable();
    }

    disconnect(): void {
      this.listSubject.complete();
      this.loadingSubject.complete();
      this.totalSubject.complete();
    }

    public load(option) {
      this.loadingSubject.next(true);
      query.fetch(option).pipe(
        take(1),
        catchError(() => of([])),
        map((result: any) => result.data[keyName]),
        tap(({ items }) => this.listSubject.next(items)),
        tap(({ total }) => this.totalSubject.next(total)),
        finalize(() => this.loadingSubject.next(false))
      ).subscribe();
    }
  }
  return PaginatedDatasource;
}

import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersGQL, EvenementsGQL } from 'src/generated/graphql';
import { map, take, tap, finalize } from 'rxjs/operators';

type PaginableRessourceService = EvenementsGQL | UsersGQL ;

export class PaginatedDatasource<T> implements DataSource<T> {
  private listSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private totalSubject = new BehaviorSubject<number>(1);

  public loading = this.loadingSubject.asObservable();
  public total = this.totalSubject.asObservable();

  constructor(private readonly service: PaginableRessourceService) {}

  connect(): Observable<T[]> {
    return this.listSubject.asObservable();
  }

  disconnect(): void {
    this.listSubject.complete();
    this.loadingSubject.complete();
    this.totalSubject.complete();
  }

  public load(options) {
    this.loadingSubject.next(true);
    this.service.fetch(options).pipe(
      // TODO investigate. This code works as is, but
      // @ts-ignore: Unreachable code error
      take(1),
      map((result: any) => result.data[Object.keys(result.data)[0]]),
      tap(({ items }) => this.listSubject.next(items)),
      tap(({ total }) => this.totalSubject.next(total)),
      finalize(() => this.loadingSubject.next(false))
    // tslint:disable-next-line: deprecation
    ).subscribe();
  }
}

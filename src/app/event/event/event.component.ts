import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementGQL, EvenementQuery, Evenement } from 'src/generated/graphql';
import { take, tap, map, catchError, finalize, defaultIfEmpty, switchMap, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  evenement;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private evenementGql: EvenementGQL
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      take(1),
      tap((params) => {
        this.evenementGql.fetch({ id: params.get('id') }).pipe(take(1)).subscribe(
          res => this.evenement = res.data.evenement,
          err => this.error = err,
          () => console.log('over')
        );
      })
    ).subscribe();
  }
}

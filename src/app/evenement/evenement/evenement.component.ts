import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementGQL, Role } from 'src/generated/graphql';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  evenement;
  error = '';
  initialPanel = '';
  appRoles = Role;
  constructor(
    private route: ActivatedRoute,
    private evenementGql: EvenementGQL
  ) { }

  ngOnInit(): void {
    // Take params for initial panel open
    this.route.queryParams.pipe(take(1)).subscribe(
      (queryParams) => {
        this.initialPanel = queryParams.initPanel || 'meetings';
      }
    );
    // Query Evenement based on params id
    this.route.paramMap.pipe(
      take(1),
      tap((params) => {
        this.evenementGql.fetch({ id: params.get('id') }).pipe(take(1)).subscribe(
          res => this.evenement = res.data.evenement,
          err => this.error = err,
        );
      })
    ).subscribe();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Role, EvenementGQL, EvenementFragment } from 'src/generated/graphql';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-evenement-actions-menu',
  templateUrl: './evenement-actions-menu.component.html',
  styleUrls: ['./evenement-actions-menu.component.scss']
})
export class EvenementActionsMenuComponent implements OnInit {
  appRoles = Role;
  evenement: EvenementFragment;
  @Input('evenementId') evenementId: string;
  
  constructor(
    private evenementGql: EvenementGQL
  ) { }

  ngOnInit(): void {
    // Query Evenement based on params id
    this.evenementGql.fetch({ id: this.evenementId }).pipe(take(1)).subscribe(
      res => this.evenement = res.data.evenement,
    );
  }
}

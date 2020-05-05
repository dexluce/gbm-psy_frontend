import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MeGQL, UserFragment } from 'src/generated/graphql';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  subscriptionToUserConnected = new Subscription();
  userConnected: UserFragment;

  constructor(
    public authService: AuthService,
    private meGql: MeGQL,
  ) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.subscriptionToUserConnected = this.meGql.watch().valueChanges.subscribe(
        ({ data }) => {
          if (data) {
            this.userConnected = data.me;
          } else {
            this.userConnected = null;
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.subscriptionToUserConnected.unsubscribe();
  }
}

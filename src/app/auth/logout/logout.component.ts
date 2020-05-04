import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.authService.removeAccessToken();
      this.apollo.getClient().resetStore();
      this.router.navigate(['/']);
    }, 3000);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitAttempt = false;
  loginInvalid = '';
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private loginGql: LoginGQL,
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || ['/'];

    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl(this.returnUrl);
    }

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginInvalid = '';

    if (this.form.valid) {
      this.formSubmitAttempt = true;

      this.loginGql.mutate({
        email: this.form.get('username').value,
        password: this.form.get('password').value,
      }).toPromise().then((result) => {
        if (result.errors) {
          this.loginInvalid = result.errors[0].message;
          return;
        } else {
          this.loginInvalid = '';
          this.authService.storeAccessToken(result.data.login.token);
          this.router.navigateByUrl(this.returnUrl);
        }
      }).catch((e) => {
        this.loginInvalid = e;
      }).finally(() => this.formSubmitAttempt = false);
    }
  }
}

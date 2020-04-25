import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private authService: AuthService
  ) {
  }

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
    this.formSubmitAttempt = true;

    if (this.form.valid) {
      this.authService.login({
        email: this.form.get('username').value,
        password: this.form.get('password').value,
      }).then(() => {
        this.loginInvalid = '';
        this.router.navigateByUrl(this.returnUrl);
      }).catch(e => {
        this.loginInvalid = e;
      });
    }

    this.formSubmitAttempt = false;
  }
}

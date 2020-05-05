import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public storeAccessToken(token: string) {
    // tslint:disable-next-line: no-string-literal
    window.sessionStorage.setItem('accessToken', token);
  }

  public retrieveAccessToken(): string {
    // tslint:disable-next-line: no-string-literal
    return window.sessionStorage.getItem('accessToken');
  }

  public isAuthenticated(): boolean {
    return this.retrieveAccessToken() ? true : false;
  }

  public removeAccessToken() {
    window.sessionStorage.removeItem('accessToken');
  }
}

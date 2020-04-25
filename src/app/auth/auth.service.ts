import { Injectable } from '@angular/core';
import { LoginGQL, LoginMutationVariables, User, LoginMutation } from 'src/generated/graphql';
import { catchError, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GraphQLError } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private loginGql: LoginGQL) { }

  private storeAccessToken(token: string) {
    // tslint:disable-next-line: no-string-literal
    window.localStorage['accessToken'] = token;
  }

  public retrieveAccessToken(): string {
    // tslint:disable-next-line: no-string-literal
    return window.localStorage['accessToken'];
  }

  public isAuthenticated(): boolean {
    return this.retrieveAccessToken() ? true : false;
  }

  public async login(credentials: LoginMutationVariables): Promise<User> {
    return new Promise((resolve, reject) => {
      this.loginGql.mutate(credentials)
      .pipe(
        take(1),
        tap(({ data: { login: { token, user } } }) => {
          this.storeAccessToken(token);
          resolve(user as User);
        }),
        catchError((err: GraphQLError) => {
          reject(err.message);
          return of(err);
        }),
      ).subscribe();
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './token.interceptor';
import { UserModule } from './user/user.module';
import { EvenementModule } from './evenement/evenement.module';
import { GraphQLModule } from './graphql.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    FlexLayoutModule,
    HammerModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    EvenementModule,
    GraphQLModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey,
      libraries: ['places']
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

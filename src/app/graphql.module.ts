import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { environment } from 'src/environments/environment';
import { onError } from 'apollo-link-error';
import { concat } from 'apollo-link';
import { AuthService } from 'src/app/auth/auth.service';

// GRAPHQL ERROR INTERCEPTOR
const linkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(graphQLError => {
      switch (graphQLError.message) {
        case 'Unauthorized':
          localStorage.removeItem('accessToken');
          location.reload();
          break;
        default:
          throw graphQLError;
      }
    });
  }
  if (networkError) { throw networkError; }
});

// GRAPHQL ENDPOINT
const uri = environment.backendUrl + '/graphql'; // <-- add the URL of the GraphQL server here

// INIT GRAPHQL
export function createApollo(httpLink: HttpLink) {
  return {
    link: concat(linkError, httpLink.create({uri})),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

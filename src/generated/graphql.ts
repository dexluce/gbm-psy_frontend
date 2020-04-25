import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export type AppFile = {
   __typename?: 'AppFile';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Auth = {
   __typename?: 'Auth';
  /** JWT Bearer token */
  token: Scalars['String'];
  user: User;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  role: Scalars['String'];
};


export type Evenement = {
   __typename?: 'Evenement';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  subscriptionsToEvenement: Array<SubscriptionToEvenement>;
  meetings: Array<Meeting>;
  isValid: Scalars['Boolean'];
  files: Array<AppFile>;
};

export type EvenementConnection = {
   __typename?: 'EvenementConnection';
  items?: Maybe<Array<Evenement>>;
  total: Scalars['Int'];
};

export type EvenementOrder = {
  direction: OrderDirection;
  field: EvenementOrderField;
};

/** Properties by which post connections can be ordered. */
export enum EvenementOrderField {
  Id = 'id',
  Title = 'title'
}

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Meeting = {
   __typename?: 'Meeting';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  virtualAddress?: Maybe<Scalars['String']>;
  physicalAddress?: Maybe<Scalars['String']>;
  evenement: Evenement;
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  changePassword: User;
  login: Auth;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
   __typename?: 'Query';
  me: User;
  users: UserConnection;
  evenements: EvenementConnection;
};


export type QueryUsersArgs = {
  orderBy?: Maybe<UserOrder>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryEvenementsArgs = {
  orderBy?: Maybe<EvenementOrder>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  Formator = 'FORMATOR',
  Participant = 'PARTICIPANT'
}

export type SubscriptionToEvenement = {
   __typename?: 'SubscriptionToEvenement';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  evenement: Evenement;
  isInstructor: Scalars['Boolean'];
  isValid: Scalars['Boolean'];
};

export type UpdateUserInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  lastname?: Maybe<Scalars['String']>;
  role: Role;
  subscriptionsToEvenement: Array<SubscriptionToEvenement>;
};

export type UserConnection = {
   __typename?: 'UserConnection';
  items?: Maybe<Array<User>>;
  total: Scalars['Int'];
};

export type UserOrder = {
  direction: OrderDirection;
  field: UserOrderField;
};

/** Properties by which post connections can be ordered. */
export enum UserOrderField {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email'
}

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type EvenementQueryVariables = {
  orderBy?: Maybe<EvenementOrder>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type EvenementQuery = (
  { __typename?: 'Query' }
  & { evenements: (
    { __typename?: 'EvenementConnection' }
    & Pick<EvenementConnection, 'total'>
    & { items?: Maybe<Array<(
      { __typename?: 'Evenement' }
      & Pick<Evenement, 'id' | 'title' | 'description'>
    )>> }
  ) }
);

export type UsersQueryVariables = {
  orderBy?: Maybe<UserOrder>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UserConnection' }
    & Pick<UserConnection, 'total'>
    & { items?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstname' | 'lastname' | 'email'>
    )>> }
  ) }
);

export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const EvenementDocument = gql`
    query evenement($orderBy: EvenementOrder, $filter: String, $pageNumber: Int, $pageSize: Int) {
  evenements(orderBy: $orderBy, filter: $filter, pageNumber: $pageNumber, pageSize: $pageSize) {
    ... on EvenementConnection {
      items {
        id
        title
        description
      }
      total
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EvenementGQL extends Apollo.Query<EvenementQuery, EvenementQueryVariables> {
    document = EvenementDocument;
    
  }
export const UsersDocument = gql`
    query users($orderBy: UserOrder, $filter: String, $pageNumber: Int, $pageSize: Int) {
  users(orderBy: $orderBy, filter: $filter, pageNumber: $pageNumber, pageSize: $pageSize) {
    ... on UserConnection {
      items {
        id
        firstname
        lastname
        email
      }
      total
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
  }

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    
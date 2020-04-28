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
  description?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  evenement: Evenement;
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

export type CreateEvenementInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isValid?: Maybe<Scalars['Boolean']>;
};

export type CreateMeetingInput = {
  evenementId: Scalars['String'];
  date: Scalars['DateTime'];
  physicalAddress?: Maybe<Scalars['String']>;
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
  jitsiMeetToken?: Maybe<Scalars['String']>;
  evenement: Evenement;
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  changePassword: User;
  createEvenement: Evenement;
  createMeeting: Meeting;
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


export type MutationCreateEvenementArgs = {
  data: CreateEvenementInput;
};


export type MutationCreateMeetingArgs = {
  data: CreateMeetingInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PaginableRessource = User | Evenement | Meeting;

export type PaginatedList = {
   __typename?: 'PaginatedList';
  items: Array<PaginableRessource>;
  total: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  me: User;
  users: PaginatedList;
  evenement: Evenement;
  evenements: PaginatedList;
  meeting: Meeting;
  meetingsForEvenement: Array<Meeting>;
};


export type QueryUsersArgs = {
  orderBy?: Maybe<Scalars['String']>;
  orderDirection?: Maybe<OrderDirection>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryEvenementArgs = {
  evenementId: Scalars['String'];
};


export type QueryEvenementsArgs = {
  orderBy?: Maybe<Scalars['String']>;
  orderDirection?: Maybe<OrderDirection>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QueryMeetingArgs = {
  id: Scalars['String'];
};


export type QueryMeetingsForEvenementArgs = {
  evenementId: Scalars['String'];
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

export type CreateEvenementMutationVariables = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isValid?: Maybe<Scalars['Boolean']>;
};


export type CreateEvenementMutation = (
  { __typename?: 'Mutation' }
  & { createEvenement: (
    { __typename?: 'Evenement' }
    & Pick<Evenement, 'id'>
  ) }
);

export type EvenementsQueryVariables = {
  orderDirection?: Maybe<OrderDirection>;
  orderBy?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type EvenementsQuery = (
  { __typename?: 'Query' }
  & { evenements: (
    { __typename?: 'PaginatedList' }
    & Pick<PaginatedList, 'total'>
    & { items: Array<{ __typename?: 'User' } | (
      { __typename?: 'Evenement' }
      & Pick<Evenement, 'id' | 'title' | 'description'>
    ) | { __typename?: 'Meeting' }> }
  ) }
);

export type EvenementQueryVariables = {
  id: Scalars['String'];
};


export type EvenementQuery = (
  { __typename?: 'Query' }
  & { evenement: (
    { __typename?: 'Evenement' }
    & Pick<Evenement, 'id' | 'title' | 'description'>
    & { files: Array<(
      { __typename?: 'AppFile' }
      & Pick<AppFile, 'id' | 'name' | 'description' | 'src' | 'isPublic'>
    )>, subscriptionsToEvenement: Array<(
      { __typename?: 'SubscriptionToEvenement' }
      & Pick<SubscriptionToEvenement, 'id' | 'isInstructor' | 'isValid'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      ) }
    )> }
    & MeetingsForEvenementFragment
  ) }
);

export type MeetingFragment = (
  { __typename?: 'Meeting' }
  & Pick<Meeting, 'id' | 'date' | 'jitsiMeetToken' | 'physicalAddress' | 'virtualAddress'>
);

export type MeetingsForEvenementFragment = (
  { __typename?: 'Evenement' }
  & { meetings: Array<(
    { __typename?: 'Meeting' }
    & MeetingFragment
  )> }
);

export type CreateMeetingInEvenementMutationVariables = {
  evenementId: Scalars['String'];
  date: Scalars['DateTime'];
  physicalAddress?: Maybe<Scalars['String']>;
};


export type CreateMeetingInEvenementMutation = (
  { __typename?: 'Mutation' }
  & { createMeeting: (
    { __typename?: 'Meeting' }
    & Pick<Meeting, 'id'>
  ) }
);

export type MeetingQueryVariables = {
  id: Scalars['String'];
};


export type MeetingQuery = (
  { __typename?: 'Query' }
  & { meeting: (
    { __typename?: 'Meeting' }
    & MeetingFragment
  ) }
);

export type MeetingsInEvenementQueryVariables = {
  evenementId: Scalars['String'];
};


export type MeetingsInEvenementQuery = (
  { __typename?: 'Query' }
  & { meetingsForEvenement: Array<(
    { __typename?: 'Meeting' }
    & MeetingFragment
  )> }
);

export type UsersQueryVariables = {
  orderDirection?: Maybe<OrderDirection>;
  orderBy?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'PaginatedList' }
    & Pick<PaginatedList, 'total'>
    & { items: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstname' | 'lastname' | 'email'>
    ) | { __typename?: 'Evenement' } | { __typename?: 'Meeting' }> }
  ) }
);

export const MeetingFragmentDoc = gql`
    fragment meeting on Meeting {
  id
  date
  jitsiMeetToken
  physicalAddress
  virtualAddress
}
    `;
export const MeetingsForEvenementFragmentDoc = gql`
    fragment meetingsForEvenement on Evenement {
  meetings {
    ...meeting
  }
}
    ${MeetingFragmentDoc}`;
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
export const CreateEvenementDocument = gql`
    mutation CreateEvenement($title: String!, $description: String, $isValid: Boolean) {
  createEvenement(data: {title: $title, description: $description, isValid: $isValid}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEvenementGQL extends Apollo.Mutation<CreateEvenementMutation, CreateEvenementMutationVariables> {
    document = CreateEvenementDocument;
    
  }
export const EvenementsDocument = gql`
    query evenements($orderDirection: OrderDirection, $orderBy: String, $filter: String, $pageNumber: Int, $pageSize: Int) {
  evenements(orderDirection: $orderDirection, orderBy: $orderBy, filter: $filter, pageNumber: $pageNumber, pageSize: $pageSize) {
    items {
      ... on Evenement {
        id
        title
        description
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EvenementsGQL extends Apollo.Query<EvenementsQuery, EvenementsQueryVariables> {
    document = EvenementsDocument;
    
  }
export const EvenementDocument = gql`
    query evenement($id: String!) {
  evenement(evenementId: $id) {
    id
    title
    description
    files {
      id
      name
      description
      src
      isPublic
    }
    subscriptionsToEvenement {
      id
      isInstructor
      isValid
      user {
        id
        email
      }
    }
    ...meetingsForEvenement
  }
}
    ${MeetingsForEvenementFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvenementGQL extends Apollo.Query<EvenementQuery, EvenementQueryVariables> {
    document = EvenementDocument;
    
  }
export const CreateMeetingInEvenementDocument = gql`
    mutation createMeetingInEvenement($evenementId: String!, $date: DateTime!, $physicalAddress: String) {
  createMeeting(data: {evenementId: $evenementId, date: $date, physicalAddress: $physicalAddress}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMeetingInEvenementGQL extends Apollo.Mutation<CreateMeetingInEvenementMutation, CreateMeetingInEvenementMutationVariables> {
    document = CreateMeetingInEvenementDocument;
    
  }
export const MeetingDocument = gql`
    query meeting($id: String!) {
  meeting(id: $id) {
    ...meeting
  }
}
    ${MeetingFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeetingGQL extends Apollo.Query<MeetingQuery, MeetingQueryVariables> {
    document = MeetingDocument;
    
  }
export const MeetingsInEvenementDocument = gql`
    query meetingsInEvenement($evenementId: String!) {
  meetingsForEvenement(evenementId: $evenementId) {
    ...meeting
  }
}
    ${MeetingFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeetingsInEvenementGQL extends Apollo.Query<MeetingsInEvenementQuery, MeetingsInEvenementQueryVariables> {
    document = MeetingsInEvenementDocument;
    
  }
export const UsersDocument = gql`
    query users($orderDirection: OrderDirection, $orderBy: String, $filter: String, $pageNumber: Int, $pageSize: Int) {
  users(orderDirection: $orderDirection, orderBy: $orderBy, filter: $filter, pageNumber: $pageNumber, pageSize: $pageSize) {
    items {
      ... on User {
        id
        firstname
        lastname
        email
      }
    }
    total
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
    "types": [
      {
        "kind": "UNION",
        "name": "PaginableRessource",
        "possibleTypes": [
          {
            "name": "User"
          },
          {
            "name": "Evenement"
          },
          {
            "name": "Meeting"
          }
        ]
      }
    ]
  }
};
      export default result;
    
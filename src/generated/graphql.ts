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
  isActive?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type CreateMeetingInput = {
  evenementId: Scalars['String'];
  date: Scalars['DateTime'];
  physicalAddress?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  sex: Sex;
  phone: Scalars['String'];
  profession: Scalars['String'];
  profession_place: Scalars['String'];
  personnal_address: Scalars['String'];
  chargeable_address: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Role>;
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
  isActive: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
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
  createUserByAdmin: User;
  updateUser: User;
  changePassword: User;
  createEvenement: Evenement;
  createMeeting: Meeting;
  refreshVirtualRoom: Meeting;
  login: Auth;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateUserByAdminArgs = {
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


export type MutationRefreshVirtualRoomArgs = {
  meetingId: Scalars['String'];
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
  meetingsInEvenement: Array<Meeting>;
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


export type QueryMeetingsInEvenementArgs = {
  evenementId: Scalars['String'];
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  Formator = 'FORMATOR',
  Participant = 'PARTICIPANT'
}

/** User sex */
export enum Sex {
  Monsieur = 'MONSIEUR',
  Madame = 'MADAME'
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
  isCertified: Scalars['Boolean'];
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
  sex: Sex;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  profession: Scalars['String'];
  profession_place: Scalars['String'];
  personnal_address: Scalars['String'];
  chargeable_address?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  role: Role;
  subscriptionsToEvenement: Array<SubscriptionToEvenement>;
};

export type EvenementFragment = (
  { __typename?: 'Evenement' }
  & Pick<Evenement, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'isActive' | 'isPublic'>
);

export type AppFileFragment = (
  { __typename?: 'AppFile' }
  & Pick<AppFile, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'src' | 'isPublic'>
);

export type MeetingFragment = (
  { __typename?: 'Meeting' }
  & Pick<Meeting, 'id' | 'createdAt' | 'updatedAt' | 'date' | 'jitsiMeetToken' | 'physicalAddress' | 'virtualAddress'>
  & { evenement: (
    { __typename?: 'Evenement' }
    & Pick<Evenement, 'id'>
  ) }
);

export type SubscriptionToEvenementFragment = (
  { __typename?: 'SubscriptionToEvenement' }
  & Pick<SubscriptionToEvenement, 'id' | 'createdAt' | 'updatedAt' | 'isInstructor' | 'isValid' | 'isCertified'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstname' | 'isActive' | 'lastname' | 'role'>
);

export type CreateEvenementMutationVariables = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
};


export type CreateEvenementMutation = (
  { __typename?: 'Mutation' }
  & { createEvenement: (
    { __typename?: 'Evenement' }
    & EvenementFragment
  ) }
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
    & { evenement: (
      { __typename?: 'Evenement' }
      & EvenementFragment
    ) }
    & MeetingFragment
  ) }
);

export type CreateUserByAdminMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  sex: Sex;
  phone: Scalars['String'];
  profession: Scalars['String'];
  profession_place: Scalars['String'];
  personnal_address: Scalars['String'];
  chargeable_address: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Role>;
};


export type CreateUserByAdminMutation = (
  { __typename?: 'Mutation' }
  & { createUserByAdmin: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type CreateUserMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  sex: Sex;
  phone: Scalars['String'];
  profession: Scalars['String'];
  profession_place: Scalars['String'];
  personnal_address: Scalars['String'];
  chargeable_address: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Role>;
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

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
      & { subscriptionsToEvenement: Array<(
        { __typename?: 'SubscriptionToEvenement' }
        & SubscriptionToEvenementFragment
      )> }
      & UserFragment
    ) }
  ) }
);

export type RefreshVirtualRoomMutationVariables = {
  meetingId: Scalars['String'];
};


export type RefreshVirtualRoomMutation = (
  { __typename?: 'Mutation' }
  & { refreshVirtualRoom: (
    { __typename?: 'Meeting' }
    & MeetingFragment
  ) }
);

export type EvenementQueryVariables = {
  id: Scalars['String'];
};


export type EvenementQuery = (
  { __typename?: 'Query' }
  & { evenement: (
    { __typename?: 'Evenement' }
    & { files: Array<(
      { __typename?: 'AppFile' }
      & AppFileFragment
    )>, subscriptionsToEvenement: Array<(
      { __typename?: 'SubscriptionToEvenement' }
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      ) }
      & SubscriptionToEvenementFragment
    )>, meetings: Array<(
      { __typename?: 'Meeting' }
      & Pick<Meeting, 'id'>
    )> }
    & EvenementFragment
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
      & EvenementFragment
    ) | { __typename?: 'Meeting' }> }
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & UserFragment
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
  & { meetingsInEvenement: Array<(
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
      & UserFragment
    ) | { __typename?: 'Evenement' } | { __typename?: 'Meeting' }> }
  ) }
);

export const EvenementFragmentDoc = gql`
    fragment evenement on Evenement {
  id
  createdAt
  updatedAt
  title
  description
  isActive
  isPublic
}
    `;
export const AppFileFragmentDoc = gql`
    fragment appFile on AppFile {
  id
  createdAt
  updatedAt
  name
  description
  src
  isPublic
}
    `;
export const MeetingFragmentDoc = gql`
    fragment meeting on Meeting {
  id
  createdAt
  updatedAt
  date
  jitsiMeetToken
  physicalAddress
  virtualAddress
  evenement {
    id
  }
}
    `;
export const SubscriptionToEvenementFragmentDoc = gql`
    fragment subscriptionToEvenement on SubscriptionToEvenement {
  id
  createdAt
  updatedAt
  isInstructor
  isValid
  isCertified
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  createdAt
  updatedAt
  email
  firstname
  isActive
  lastname
  role
}
    `;
export const CreateEvenementDocument = gql`
    mutation CreateEvenement($title: String!, $description: String, $isActive: Boolean, $isPublic: Boolean) {
  createEvenement(data: {title: $title, description: $description, isActive: $isActive, isPublic: $isPublic}) {
    ...evenement
  }
}
    ${EvenementFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEvenementGQL extends Apollo.Mutation<CreateEvenementMutation, CreateEvenementMutationVariables> {
    document = CreateEvenementDocument;
    
  }
export const CreateMeetingInEvenementDocument = gql`
    mutation createMeetingInEvenement($evenementId: String!, $date: DateTime!, $physicalAddress: String) {
  createMeeting(data: {evenementId: $evenementId, date: $date, physicalAddress: $physicalAddress}) {
    ...meeting
    evenement {
      ...evenement
    }
  }
}
    ${MeetingFragmentDoc}
${EvenementFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMeetingInEvenementGQL extends Apollo.Mutation<CreateMeetingInEvenementMutation, CreateMeetingInEvenementMutationVariables> {
    document = CreateMeetingInEvenementDocument;
    
  }
export const CreateUserByAdminDocument = gql`
    mutation CreateUserByAdmin($email: String!, $password: String!, $firstname: String!, $lastname: String!, $sex: Sex!, $phone: String!, $profession: String!, $profession_place: String!, $personnal_address: String!, $chargeable_address: String!, $isActive: Boolean, $role: Role) {
  createUserByAdmin(data: {email: $email, password: $password, firstname: $firstname, lastname: $lastname, sex: $sex, phone: $phone, profession: $profession, profession_place: $profession_place, personnal_address: $personnal_address, chargeable_address: $chargeable_address, isActive: $isActive, role: $role}) {
    ...user
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserByAdminGQL extends Apollo.Mutation<CreateUserByAdminMutation, CreateUserByAdminMutationVariables> {
    document = CreateUserByAdminDocument;
    
  }
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!, $firstname: String!, $lastname: String!, $sex: Sex!, $phone: String!, $profession: String!, $profession_place: String!, $personnal_address: String!, $chargeable_address: String!, $isActive: Boolean, $role: Role) {
  createUser(data: {email: $email, password: $password, firstname: $firstname, lastname: $lastname, sex: $sex, phone: $phone, profession: $profession, profession_place: $profession_place, personnal_address: $personnal_address, chargeable_address: $chargeable_address, isActive: $isActive, role: $role}) {
    ...user
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
    user {
      ...user
      subscriptionsToEvenement {
        ...subscriptionToEvenement
      }
    }
  }
}
    ${UserFragmentDoc}
${SubscriptionToEvenementFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const RefreshVirtualRoomDocument = gql`
    mutation RefreshVirtualRoom($meetingId: String!) {
  refreshVirtualRoom(meetingId: $meetingId) {
    ...meeting
  }
}
    ${MeetingFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RefreshVirtualRoomGQL extends Apollo.Mutation<RefreshVirtualRoomMutation, RefreshVirtualRoomMutationVariables> {
    document = RefreshVirtualRoomDocument;
    
  }
export const EvenementDocument = gql`
    query evenement($id: String!) {
  evenement(evenementId: $id) {
    ...evenement
    files {
      ...appFile
    }
    subscriptionsToEvenement {
      ...subscriptionToEvenement
      user {
        id
        email
      }
    }
    meetings {
      id
    }
  }
}
    ${EvenementFragmentDoc}
${AppFileFragmentDoc}
${SubscriptionToEvenementFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvenementGQL extends Apollo.Query<EvenementQuery, EvenementQueryVariables> {
    document = EvenementDocument;
    
  }
export const EvenementsDocument = gql`
    query evenements($orderDirection: OrderDirection, $orderBy: String, $filter: String, $pageNumber: Int, $pageSize: Int) {
  evenements(orderDirection: $orderDirection, orderBy: $orderBy, filter: $filter, pageNumber: $pageNumber, pageSize: $pageSize) {
    items {
      ... on Evenement {
        ...evenement
      }
    }
    total
  }
}
    ${EvenementFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvenementsGQL extends Apollo.Query<EvenementsQuery, EvenementsQueryVariables> {
    document = EvenementsDocument;
    
  }
export const MeDocument = gql`
    query Me {
  me {
    ...user
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
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
  meetingsInEvenement(evenementId: $evenementId) {
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
        ...user
      }
    }
    total
  }
}
    ${UserFragmentDoc}`;

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
    
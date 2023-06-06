import {  gql } from '@apollo/client';
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(payload:{email:$email, password:$password}) {
      token
      role
      tokenExpiryDate
      email
    }
  }
`;
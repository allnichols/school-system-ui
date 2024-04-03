import { gql } from "@apollo/client";

export const GET_TEACHERS = gql`
  query {
    getAllTeachers {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_TEACHER = gql`
  query getTeacherById($id: ID!) {
    getTeacherById(id: $id) {
      id
      firstName
      lastName
      email
      dob
    }
  }
`;

export const CREATE_TEACHER = gql`
  mutation CreateTeacher(
    $firstName: String!
    $lastName: String!
    $email: String!
    $dob: String!
  ) {
    createTeacher(
      firstName: $firstName
      lastName: $lastName
      email: $email
      dob: $dob
    ) {
      id
      firstName
      lastName
      email
      dob
    }
  }
`;

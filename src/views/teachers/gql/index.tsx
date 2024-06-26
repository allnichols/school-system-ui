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
  mutation createTeacher($teacher: TeacherInput!) {
    createTeacher(teacher: $teacher) {
      id
      firstName
      lastName
      email
      dob
      __typename
    }
  }
`;

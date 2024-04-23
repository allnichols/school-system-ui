import { gql } from "@apollo/client";

export const CREATE_COURSE = gql`
  mutation createCourse($course: CourseInput!) {
    createCourse(course: $course) {
      id
      name
      gradeLevel
      teacher {
        id
        firstName
        lastName
      }
      __typename
    }
  }
`;

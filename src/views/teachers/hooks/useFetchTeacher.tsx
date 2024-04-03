import { useQuery, gql } from "@apollo/client";

//  get one teacher
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

export const useFetchTeacher = (id: string) => {
  const { loading, error, data } = useQuery(GET_TEACHER, {
    variables: { id },
  });

  return { loading, error, data };
};

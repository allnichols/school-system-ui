import { useSuspenseQuery } from "@apollo/client";
import { GetCourseByIdDocument } from "../../../generated/graphql";

const useFetchCourseById = (id: string) => {
  const { data } = useSuspenseQuery(GetCourseByIdDocument, {
    variables: { id },
  });

  return { data };
};

export { useFetchCourseById };

import { Suspense } from "react";
import { useParams } from "@tanstack/react-router";
import { useFetchCourseById } from "./hooks/useFetchCourseById";

const Course = () => {
  const { id } = useParams({ from: "/courses/$id" });
  const { data } = useFetchCourseById(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>{data.getCourseById?.courseName}</h1>
      <p>Grade Level: {data.getCourseById?.gradeLevel}</p>
    </Suspense>
  );
};

export { Course };

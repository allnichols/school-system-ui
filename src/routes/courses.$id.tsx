import { createFileRoute } from "@tanstack/react-router";
import { Course } from "../views/courses/course";

export const Route = createFileRoute("/courses/$id")({
  component: () => <Course />,
});

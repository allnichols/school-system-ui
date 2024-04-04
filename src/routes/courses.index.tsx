import { createFileRoute } from "@tanstack/react-router";
import CoursesPage from "../views/courses";

export const Route = createFileRoute("/courses/")({
  component: () => <CoursesPage />,
});

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/create")({
  component: () => <p>Create Course</p>,
});

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/")({
  component: () => <p>Courses Page</p>,
});

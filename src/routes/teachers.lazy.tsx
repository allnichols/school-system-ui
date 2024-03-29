import { createLazyFileRoute } from "@tanstack/react-router";
import TeachersPage from "../views/teachers";

export const Route = createLazyFileRoute("/teachers")({
  component: () => <TeachersPage />,
});

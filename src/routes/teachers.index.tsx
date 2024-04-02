import { createFileRoute } from "@tanstack/react-router";
import TeachersPage from "../views/teachers";

export const Route = createFileRoute("/teachers/")({
  component: () => <TeachersPage />,
});

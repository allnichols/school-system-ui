import { createLazyFileRoute } from "@tanstack/react-router";
import TeachersPage from "../views/teachers/index";

export const Route = createLazyFileRoute("/")({
  component: () => <TeachersPage />,
});

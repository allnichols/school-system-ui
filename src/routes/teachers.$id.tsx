import { createFileRoute } from "@tanstack/react-router";
import Teacher from "../views/teachers/teacher";

export const Route = createFileRoute("/teachers/$id")({
  component: () => <Teacher />,
});

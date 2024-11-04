import { createFileRoute } from '@tanstack/react-router'
import CreateTeacher from '../views/teachers/createTeacher'

export const Route = createFileRoute('/teachers_/create')({
  component: () => <CreateTeacher />,
})

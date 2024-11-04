import { createFileRoute } from '@tanstack/react-router'
import CreateCourse from '../views/courses/createCourse'

export const Route = createFileRoute('/courses_/create')({
  component: () => <CreateCourse />,
})

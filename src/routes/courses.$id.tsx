import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /courses/$id!'
}

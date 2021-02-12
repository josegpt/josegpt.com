import { Project } from "~/store"

export function noForks(project: Project) {
  return project.fork == false
}

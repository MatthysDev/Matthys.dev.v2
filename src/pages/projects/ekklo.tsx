import ProjectPage from '@/components/v2/ProjectPage'
import { COMPAGNIE, EKKLO } from '@/content/projects'

export default function EkkloPage() {
  return <ProjectPage project={EKKLO} next={COMPAGNIE} />
}

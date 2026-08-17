import ProjectPage from '@/components/v2/ProjectPage'
import { COMPAGNIE, EKKLO } from '@/content/projects'

export default function CompagniePage() {
  return <ProjectPage project={COMPAGNIE} next={EKKLO} />
}

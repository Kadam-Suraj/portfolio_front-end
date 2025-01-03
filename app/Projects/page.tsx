import { getAllProjects } from '../api/project';
import { Interface } from '../Constants/interface';
import ProjectList from './ProjectList';

export default async function ProjectsPage() {
    const projects: Interface = await getAllProjects();

    return (
        <div>
            <ProjectList projects={projects} />
        </div>
    );
}
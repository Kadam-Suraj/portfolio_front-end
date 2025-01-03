import { getProject } from "@/app/api/project";
import { Interface } from "@/app/Constants/interface";
import ProjectDetails from "./ProjectDetails";

const slug = async ({ params }) => {
    const project: Interface = await getProject(params.slug[0]);

    return (
        <div>
            <ProjectDetails project={project} />
        </div>
    )
}

export default slug
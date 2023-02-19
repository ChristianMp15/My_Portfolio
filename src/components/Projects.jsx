import projects from "../json/projects.json"
import { ProjectsContainer, ProjectCard, ProjecctImage, ProjectLink, ProjectsDescription, ProjectsLinkContainer} from "../styledcomponents/Projects"

export default function Projects(){
  return  <ProjectsContainer>
        {projects.map((project) =>(
            <ProjectCard key={project.name}>
                <h3>{project.name}</h3>
                <ProjecctImage src={project.image}/>
                <ProjectsDescription>{project.descrpition}</ProjectsDescription>
                <ProjectsLinkContainer>
                <ProjectLink href={project.github}>Github</ProjectLink>
                <ProjectLink href={project.live}>live site</ProjectLink>
                </ProjectsLinkContainer>
                </ProjectCard>
        ))}
       
    </ProjectsContainer>
}
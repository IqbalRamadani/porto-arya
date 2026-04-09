import Image from "next/image";
import { getAllProjects } from '@/lib/mdx';
import ProjectCard from '@/components/ui/ProjectCard';

export const metadata = {
  title: 'Projects - Arya Team',
  description: 'Explore all projects by Arya Team',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Web Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            PROJECTS
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collection of our best work from web development to full-stack applications
          </p>
        </div>

        {/* Project Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.slug}
                title={project.frontmatter.title}
                description={project.frontmatter.description}
                category={project.frontmatter.category}
                thumbnail={project.frontmatter.thumbnail}
                slug={project.slug}
                stack={project.frontmatter.stack}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

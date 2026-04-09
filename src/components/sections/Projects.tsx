import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import { getAllProjects } from '@/lib/mdx';

export default async function ProjectsPreview() {
  const allProjects = await getAllProjects();
  const featuredProjects = allProjects.filter(p => p.frontmatter.featured).slice(0, 2);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Projects
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Explore Our Best Project
            </h2>
          </div>
          <Link
            href="/projects"
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            See All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
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
          <div className="text-center py-12\">
            <p className="text-muted-foreground">No featured projects yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
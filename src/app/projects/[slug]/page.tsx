import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.frontmatter.title} - Arya Team`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound()
  }

  const { frontmatter, content } = project;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-black">
        <Image
          src={frontmatter.thumbnail}
          alt={frontmatter.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm text-white mb-4">
                {frontmatter.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {frontmatter.title}
              </h1>
              <p className="text-lg text-white/90 mb-6">
                {frontmatter.description}
              </p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(frontmatter.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {frontmatter.stack.length} Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {frontmatter.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-mono bg-card"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* MDX Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </div>
    </div>
  )
}
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  slug: string;
  stack: string[];
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  thumbnail,
  slug,
  stack,
  className,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={cn('group block', className)}>
      <div className="relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-xl hover:scale-[1.5]">
        {/* Thumbnail */}
        <div className= "relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/0" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-full bg-white/90 px-3 text-xs font-medium text-black backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Hover Icon */}
          <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-card-foreground">
            {title}
          </h3>
          <p className="mb-4 text-sm text-card-foreground/80">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-md border border-border px-2 py-1 text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {stack.length > 4 && (
              <span className="inline-block rounded-md px-2 py-1 text-xs font-mono text-muted-foreground">
                +{stack.length -4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
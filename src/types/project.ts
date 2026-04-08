export interface ProjectFrontMatter {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  date: string;
  stack: string[];
  featured?: boolean;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontMatter;
  content: string;
}
'use client'

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Laravel', icon: '🔷' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Vercel', icon: '▼' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'PUCK', icon: '🎯' },
  { name: 'Livewire', icon: '⚡' },
  { name: 'Filament', icon: '📂' },
  { name: 'shadcn/ui', icon: '🎨' },
  { name: 'React', icon: '⚛' },
  { name: 'Tailwind', icon: '🎨' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function TechStack() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Web Portfolio
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            TECH STACK
          </h2>
        </div>

        {/* Tech Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-dashed border-border/60 hover:border-primary/40 transition-all"
            >
              <span className="text-4xl mb-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                {tech.icon}
              </span>
              <span className="text-sm font-mono text-muted-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
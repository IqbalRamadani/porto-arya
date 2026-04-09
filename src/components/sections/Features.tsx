'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Beautifully Design Component',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    description: 'Clean and modern UI components',
  },
  {
    title: 'Friendly User Experience',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    description: 'Intuitive and user-friendly interfaces',
  },
  {
    title: 'SEO Optimization',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
    description: 'Optimized for search engines',
    cta: \"Let's Collaborate\",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80">{feature.description}</p>

                {/* CTA Button */}
                {feature.cta && (
                  <button className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black backdrop-blur-sm transition-all hover:bg-white">
                    {feature.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
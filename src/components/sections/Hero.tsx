'use client'

import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Iqbal Ramadani', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Iqbal' },
  { name: 'Farhan Syifaul', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan' },
  { name: 'Naufal Irfansyah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Naufal' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-muted-foreground mb-4"
          >
            Web Portfolio
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12"
          >
            ARYA TEAM
          </motion.h1>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-1 mb-3">
                  <div className="w-full h-full rounded-full bg-muted overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground/80">{member.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
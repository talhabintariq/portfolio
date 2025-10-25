"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="about" className="container py-24">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Frontend */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Frontend</h3>
            <motion.div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Backend & APIs</h3>
            <motion.div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* AI/ML */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">AI & Agents</h3>
            <motion.div className="flex flex-wrap gap-3">
              {skills.aiml.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* DevOps */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Infrastructure & Testing</h3>
            <motion.div className="flex flex-wrap gap-3">
              {skills.devops.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

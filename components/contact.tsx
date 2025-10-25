"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { socialLinks, personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="container py-24 bg-muted/30">
      <div className="space-y-16">
        {/* Header - Aligned with form fields */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          <div className="hidden lg:block" />
          <div className="max-w-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:border-r lg:border-border/10 lg:pr-12"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&to=talhabintariq@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compose email to talhabintariq@gmail.com"
                title={personalInfo.email}
                className="group flex items-center gap-3 w-full px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">Email</p>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="group flex items-center gap-3 w-full px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    LinkedIn
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="group flex items-center gap-3 w-full px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

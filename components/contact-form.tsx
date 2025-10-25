"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Invalid submission"), // Anti-bot field
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: "", // Hidden field for bots
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      // Add timeout to prevent indefinite loading
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          setErrorMessage("Request timed out. Please check your email configuration and try again.");
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
        >
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          aria-invalid={errors.name ? "true" : "false"}
          className="w-full px-4 py-2 rounded-md border bg-background placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 aria-[invalid=true]:border-red-500"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
          className="w-full px-4 py-2 rounded-md border bg-background placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 aria-[invalid=true]:border-red-500"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2"
        >
          Subject
        </label>
        <input
          {...register("subject")}
          type="text"
          id="subject"
          aria-invalid={errors.subject ? "true" : "false"}
          className="w-full px-4 py-2 rounded-md border bg-background placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 aria-[invalid=true]:border-red-500"
          placeholder="TL;DR: What do you need?"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
        >
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          aria-invalid={errors.message ? "true" : "false"}
          className="w-full px-4 py-2 rounded-md border bg-background placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 aria-[invalid=true]:border-red-500 resize-none"
          placeholder="Tell me what's on your mind! The more details, the better."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot Field (hidden) */}
      <input
        {...register("honeypot")}
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Error Message */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-500"
        >
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      )}

      {/* Success Message */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 rounded-md bg-green-500/10 border border-green-500/20 text-green-500"
        >
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">
            Message sent successfully! I&apos;ll get back to you soon.
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <div className="space-y-2 mt-8">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:shadow-md hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
        <p className="text-xs text-center text-muted-foreground">
          Replies within 24–48 hours.
        </p>
      </div>
    </motion.form>
  );
}

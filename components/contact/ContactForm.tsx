"use client";

import { motion } from "framer-motion";
import { slideRight, viewportConfig } from "@/lib/animations";
import { Mail, User, Phone, MessageSquare } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const {
    formData,
    isSubmitting,
    submitMessage,
    submitError,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={slideRight}
      className="space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
    >
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="h-12 pl-10 text-base rounded-xl border border-border bg-surface/80 placeholder:text-muted focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="h-12 pl-10 text-base rounded-xl border border-border bg-surface/80 placeholder:text-muted focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="h-12 pl-10 text-base rounded-xl border border-border bg-surface/80 placeholder:text-muted focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-muted" />
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project, timeline, or requirements..."
            value={formData.message}
            onChange={handleInputChange}
            required
            className="pl-10 pt-4 text-base rounded-xl border border-border bg-surface/80 placeholder:text-muted focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Success / Error */}
      {submitMessage && (
        <p className="text-sm font-medium text-emerald-600" role="status" aria-live="polite">
          {submitMessage}
        </p>
      )}
      {submitError && (
        <p className="text-sm font-medium text-rose-600" role="alert" aria-live="assertive">
          {submitError}
        </p>
      )}

      {/* Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-slate-900 to-indigo-600 text-foreground shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
      </Button>
    </motion.form>
  );
}

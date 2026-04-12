"use client";

import React from "react";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"


type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactSection() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitMessage(data.message ?? "Message sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong while sending the message.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="space-y-10 pb-20 pt-10"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * 4, duration: 0.6, ease: "easeOut" }}
      whileInView="show"
       viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white"
          >
            Contact
          </motion.div>

          <h2 className="text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Have You Any Project? <br /> Please Drop a Message
          </h2>

          <p className="max-w-md text-lg text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get in touch and let me know how I can help. Fill out the form
            and I&apos;ll be in touch as soon as possible.
          </p>

          <div className="space-y-4 text-base text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <LocationOnIcon fontSize="small" className="text-slate-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Address</p>
                <p className="text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>Bengaluru, Karnataka, India, 560037.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <LocalPhoneIcon fontSize="small" className="text-slate-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Phone</p>
                <p className="text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>(+91) 8917615941</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <EmailIcon fontSize="small" className="text-slate-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Email</p>
                <a
                  href="mailto:ajaykrbiswal@gmail.com"
                  className="text-slate-600 underline transition hover:text-slate-900"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ajaykrbiswal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/ajay-biswal"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <GitHubIcon fontSize="small" className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <TwitterIcon fontSize="small" className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajaykumarbiswal"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <LinkedInIcon fontSize="small" className="text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <InstagramIcon fontSize="small" className="text-white" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
<motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="
    space-y-6 rounded-3xl border border-white/20
    bg-gradient-to-br from-white via-slate-50 to-slate-100
    p-10 shadow-2xl backdrop-blur-xl
  "
>
  {/* Name */}
  <div className="space-y-2">
    <Label htmlFor="name">Name</Label>
    <div className="relative">
      <PersonIcon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        fontSize="small"
      />
      <Input
        id="name"
        name="name"
        placeholder="Your full name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="
          h-12 pl-10 text-base
          rounded-xl border border-slate-200
          bg-white/80
          placeholder:text-slate-400 placeholder:text-left
          focus:bg-white focus:border-slate-400
          focus:ring-2 focus:ring-slate-300
          transition-all duration-200
        "
      />
    </div>
  </div>

  {/* Email */}
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <div className="relative">
      <EmailIcon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        fontSize="small"
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="
          h-12 pl-10 text-base
          rounded-xl border border-slate-200
          bg-white/80
          placeholder:text-slate-400
          focus:bg-white focus:border-slate-400
          focus:ring-2 focus:ring-slate-300
          transition-all duration-200
        "
      />
    </div>
  </div>

  {/* Phone */}
  <div className="space-y-2">
    <Label htmlFor="phone">Phone</Label>
    <div className="relative">
      <PhoneAndroidIcon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        fontSize="small"
      />
      <Input
        id="phone"
        name="phone"
        type="tel"
        placeholder="+91 98765 43210"
        value={formData.phone}
        onChange={handleInputChange}
        required
        className="
          h-12 pl-10 text-base
          rounded-xl border border-slate-200
          bg-white/80
          placeholder:text-slate-400
          focus:bg-white focus:border-slate-400
          focus:ring-2 focus:ring-slate-300
          transition-all duration-200
        "
      />
    </div>
  </div>

  {/* Message */}
  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <div className="relative">
      <ChatBubbleOutlineRoundedIcon
        className="absolute left-4 top-4 text-slate-400"
        fontSize="small"
      />
      <Textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Tell me about your project, timeline, or requirements..."
        value={formData.message}
        onChange={handleInputChange}
        required
        className="
          pl-10 pt-4 text-base
          rounded-xl border border-slate-200
          bg-white/80
          placeholder:text-slate-400
          focus:bg-white focus:border-slate-400
          focus:ring-2 focus:ring-slate-300
          transition-all duration-200
        "
      />
    </div>
  </div>

  {/* Success / Error */}
  {submitMessage && (
    <p className="text-sm font-medium text-emerald-600">
      {submitMessage}
    </p>
  )}
  {submitError && (
    <p className="text-sm font-medium text-rose-600">
      {submitError}
    </p>
  )}

  {/* Button */}
  <Button
    type="submit"
    disabled={isSubmitting}
    className="
      w-full h-12 text-base font-semibold rounded-xl
      bg-gradient-to-r from-indigo-600 via-slate-900 to-indigo-600
      text-white shadow-lg
      hover:scale-[1.02] hover:shadow-xl
      transition-all duration-200
    "
  >
    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
  </Button>
</motion.form>
      </div>
    </motion.section>
  );
}

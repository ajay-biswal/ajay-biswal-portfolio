"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalHeader } from "./TerminalHeader";
import { SystemStatus } from "./SystemStatus";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

/**
 * Cinematic secure transmission terminal form
 */
export function ContactTerminal() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "rgba(6, 8, 22, 0.5)",
    border: "1px solid rgba(148, 163, 184, 0.1)",
    borderRadius: "8px",
    color: "#f8fafc",
    fontSize: "14px",
    transition: "all 0.3s ease",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "rgba(148, 163, 184, 0.7)",
    marginBottom: "8px",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Ambient glow behind terminal */}
      <div
        className="absolute -inset-4 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Terminal container */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "rgba(11, 17, 32, 0.6)",
          border: "1px solid rgba(148, 163, 184, 0.12)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Terminal header */}
        <TerminalHeader />

        {/* System status */}
        <SystemStatus />

        {/* Form content */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Name & Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                style={inputBaseStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
                style={inputBaseStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label style={labelStyle}>Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              style={{
                ...inputBaseStyle,
                cursor: "pointer",
                appearance: "none" as const,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <option value="" style={{ backgroundColor: "#0B1120" }}>Select project type...</option>
              <option value="web-app" style={{ backgroundColor: "#0B1120" }}>Web Application</option>
              <option value="ai-platform" style={{ backgroundColor: "#0B1120" }}>AI Platform</option>
              <option value="saas" style={{ backgroundColor: "#0B1120" }}>SaaS Product</option>
              <option value="api" style={{ backgroundColor: "#0B1120" }}>API Development</option>
              <option value="consulting" style={{ backgroundColor: "#0B1120" }}>Consulting</option>
              <option value="other" style={{ backgroundColor: "#0B1120" }}>Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              placeholder="Describe your project, architecture, or idea..."
              style={{
                ...inputBaseStyle,
                resize: "vertical",
                minHeight: "120px",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-3 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))",
              boxShadow: "0 4px 20px rgba(6, 182, 212, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(6, 182, 212, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(6, 182, 212, 0.25)";
            }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Transmitting...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Transmission
              </>
            )}
          </motion.button>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div
              className="text-center text-sm py-3 rounded-lg"
              style={{
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                color: "rgba(6, 182, 212, 0.9)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
              }}
            >
              ✓ Transmission successful. Response within 24 hours.
            </div>
          )}

          {submitStatus === "error" && (
            <div
              className="text-center text-sm py-3 rounded-lg"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                color: "rgba(239, 68, 68, 0.9)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
              }}
            >
              ✗ Transmission failed. Please retry.
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}

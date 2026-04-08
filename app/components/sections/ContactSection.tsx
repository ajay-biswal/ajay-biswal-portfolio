"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../../components/SectionHeader";

export function ContactSection() {
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
            and I'll be in touch as soon as possible.
          </p>

          <div className="space-y-4 text-base text-slate-700" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Address</p>
                <p className="text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>Bengaluru, Karnataka, India, 560037.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>Phone</p>
                <p className="text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>(+91) 8480065146</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <span className="text-lg">✉️</span>
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
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ajaykumarbiswal"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
              Name
            </label>
            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-slate-900 focus-within:bg-white">
              <span className="text-slate-500">👤</span>
              <input
                type="text"
                placeholder="e.g John Doe"
                className="w-full bg-transparent px-4 py-3 text-base outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
              Email
            </label>
            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-slate-900 focus-within:bg-white">
              <span className="text-slate-500">📧</span>
              <input
                type="email"
                placeholder="e.g johndoe@mail.com"
                className="w-full bg-transparent px-4 py-3 text-base outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
              Phone
            </label>
            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-slate-900 focus-within:bg-white">
              <span className="text-slate-500">📱</span>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent px-4 py-3 text-base outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
              Message
            </label>
            <div className="flex items-start rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-slate-900 focus-within:bg-white">
              <span className="pt-3 text-slate-500">💬</span>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none bg-transparent px-4 py-3 text-base outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-slate-900 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
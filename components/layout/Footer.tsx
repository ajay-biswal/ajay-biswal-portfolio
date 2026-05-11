export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
      <p className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-1">
        <span>© {new Date().getFullYear()} Ajay Kumar Biswal.</span>
        <span>Built with</span>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 hover:underline"
        >
          Next.js
        </a>
        <span>,</span>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 hover:underline"
        >
          Tailwind CSS
        </a>
        <span>and a bit of</span>
        <span className="font-semibold text-slate-900">caffeine</span>
        <span>☕</span>
      </p>
    </footer>
  );
}

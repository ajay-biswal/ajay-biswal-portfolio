import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site.config";

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "Twitter",
    href: siteConfig.social.twitter,
    icon: Twitter,
    ariaLabel: "Visit Twitter profile",
  },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    icon: Instagram,
    ariaLabel: "Visit Instagram profile",
  },
] as const;

export function SocialLinks() {
  return (
    <div className="flex gap-4 pt-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.ariaLabel}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition-all hover:bg-slate-800 hover:shadow-lg"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

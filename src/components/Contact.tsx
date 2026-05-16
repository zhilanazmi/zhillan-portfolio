import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/cv";
import { Section } from "./Section";
import { Github, Linkedin } from "./BrandIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* no-op */
    }
  }

  return (
    <Section
      id="contact"
      number="06"
      kicker="Contact"
      title={
        <>
          Let's make{" "}
          <span className="font-serif italic text-lime-600 dark:text-lime">
            something good
          </span>{" "}
          together.
        </>
      }
      intro={
        <span>
          Available for fullstack roles, internships, and freelance — based in
          Bandung, working remotely worldwide.
        </span>
      }
    >
      {/* Huge mailto headline */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        href={`mailto:${profile.email}`}
        className="group block break-words font-display text-4xl font-medium leading-[0.95] tracking-display underline-offset-[14px] decoration-ink-300/40 hover:underline dark:decoration-ink-200/40 sm:text-6xl md:text-7xl lg:text-[112px]"
      >
        {profile.email}
      </motion.a>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ChannelCard
          label="Email"
          value={profile.email}
          actionLabel={copied ? "Copied!" : "Copy"}
          actionDone={copied}
          onAction={copyEmail}
          href={`mailto:${profile.email}`}
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 7L12 13L21 7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ChannelCard
          label="Phone"
          value={profile.phone}
          actionLabel="Call"
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ChannelCard
          label="GitHub"
          value="github.com/zhilanazmi"
          actionLabel="Open"
          href={profile.github}
          external
          icon={<Github className="h-4 w-4" />}
        />
        <ChannelCard
          label="LinkedIn"
          value="linkedin.com/in/zhillan-azmi"
          actionLabel="Open"
          href={profile.linkedin}
          external
          icon={<Linkedin className="h-4 w-4" />}
        />
      </div>

      {/* Site link banner */}
      <a
        href={profile.website}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-12 flex items-center justify-between gap-6 rounded-2xl bg-ink-900 px-6 py-8 text-paper-50 transition hover:bg-ink-700 dark:bg-paper-100 dark:text-ink-900 dark:hover:bg-paper-50 sm:px-10"
      >
        <div className="flex flex-col">
          <span className="label-mono opacity-70">Personal site</span>
          <span className="font-display text-3xl font-medium tracking-display sm:text-5xl">
            zhilanazmi.id ↗
          </span>
        </div>
        <span className="hidden font-mono text-[11px] uppercase tracking-wider opacity-70 sm:inline">
          Visit
        </span>
      </a>
    </Section>
  );
}

type ChannelCardProps = {
  label: string;
  value: string;
  actionLabel: string;
  actionDone?: boolean;
  onAction?: () => void;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
};

function ChannelCard({
  label,
  value,
  actionLabel,
  actionDone = false,
  onAction,
  href,
  external = false,
  icon,
}: ChannelCardProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-ink-200 bg-paper-50 p-5 dark:border-ink-600 dark:bg-ink-800/60">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-ink-700 dark:text-paper-100">
          {icon}
          <span className="label-mono-bright">{label}</span>
        </div>
      </div>
      <div className="break-all font-display text-base font-medium text-ink-800 dark:text-paper-50 sm:text-lg">
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            className="underline-offset-4 hover:underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </div>
      <button
        type="button"
        onClick={onAction}
        className={
          "inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition " +
          (actionDone
            ? "border-lime-600 bg-lime text-ink-900"
            : "border-ink-200 text-ink-700 hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50 dark:border-ink-600 dark:text-paper-100 dark:hover:bg-paper-100 dark:hover:text-ink-900")
        }
      >
        {actionDone ? (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : null}
        {actionLabel}
      </button>
    </div>
  );
}

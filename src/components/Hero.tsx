import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/cv";
import { LocalClock } from "./LocalClock";

const ROLES = [
  "ships things",
  "scales well",
  "loves details",
  "won't break",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between pb-10 pt-24"
    >
      {/* Top status row */}
      <div className="container-px hairline-bottom flex flex-wrap items-center justify-between gap-3 pb-3 text-[11px]">
        <div className="label-mono-bright flex items-center gap-3">
          <span className="relative inline-flex">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-600/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-600" />
          </span>
          Available for work — Q4 2025 onwards
        </div>
        <div className="label-mono flex items-center gap-4">
          <span>
            <span className="text-ink-200 dark:text-ink-300">Bandung</span>{" "}
            <LocalClock className="text-ink-700 dark:text-paper-100" />
          </span>
        </div>
      </div>

      {/* Main display */}
      <div className="container-px flex flex-1 flex-col justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-mono mb-6"
        >
          (Portfolio / 2025) — Zhillan Azmi
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="display-title text-balance text-[14vw] leading-[0.9] sm:text-[12vw] md:text-[110px] lg:text-[148px]"
        >
          Fullstack
          <br />
          developer
          <br />
          <span className="inline-flex items-baseline gap-3 sm:gap-6">
            <span className="text-ink-300/70 dark:text-ink-200">that</span>
            <RotatingWord words={ROLES} />
          </span>
        </motion.h1>

        {/* Subline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-12 sm:gap-12"
        >
          <p className="sm:col-span-7 lg:col-span-5 lg:col-start-7 max-w-md text-balance text-base text-ink-500 dark:text-ink-100 sm:text-lg">
            <span className="font-serif italic text-ink-700 dark:text-paper-100">
              I'm Zhillan
            </span>{" "}
            — a final-year Informatics student at{" "}
            <span className="text-ink-700 dark:text-paper-100">ITENAS Bandung</span>{" "}
            with 3+ years building Laravel + JavaScript apps for real teams. I
            obsess over typography, responsive layouts, and shipping calmly.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:col-span-5 lg:col-span-4 lg:col-start-2 lg:row-start-1">
            <a href="#projects" className="btn-lime">
              See selected work
              <Arrow />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              Drop a line
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer info row */}
      <div className="container-px hairline grid grid-cols-2 gap-x-6 gap-y-3 pt-4 text-[11px] sm:grid-cols-4">
        <InfoCell label="Currently">Final-year, ITENAS</InfoCell>
        <InfoCell label="Stack">Laravel · JS · MySQL</InfoCell>
        <InfoCell label="GPA">3.63 / 4.00</InfoCell>
        <InfoCell label="Scroll">to keep reading ↓</InfoCell>
      </div>
    </section>
  );
}

function InfoCell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="label-mono">{label}</span>
      <span className="font-display text-sm font-medium text-ink-700 dark:text-paper-100">
        {children}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H5M12 2V9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RotatingWord({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [words.length]);

  // Width-stable container based on longest word
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="relative inline-flex">
      <span className="invisible whitespace-pre font-serif italic">
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[idx]}
          initial={{ y: "0.5em", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.5em", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.7, 0, 0.3, 1] }}
          className="absolute inset-0 whitespace-pre font-serif italic text-lime-600 dark:text-lime"
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

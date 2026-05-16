import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences, type Experience as ExperienceT } from "../data/cv";
import { Section } from "./Section";

const TYPE_LABELS: Record<ExperienceT["type"], string> = {
  internship: "Internship",
  fulltime: "Full-time",
  freelance: "Freelance",
  organization: "Organization",
};

export function Experience() {
  return (
    <Section
      id="experience"
      number="02"
      kicker="Experience"
      title={
        <>
          A timeline of{" "}
          <span className="font-serif italic text-lime-600 dark:text-lime">
            shipping
          </span>{" "}
          since 2019.
        </>
      }
      intro={
        <span>
          Nine roles across industry, freelance, and student orgs. Each row is
          expandable — open it to read what I actually built.
        </span>
      }
    >
      <ol className="border-t border-ink-200/70 dark:border-ink-600/40">
        {experiences.map((exp, i) => (
          <Row key={`${exp.company}-${i}`} exp={exp} index={i} />
        ))}
      </ol>
    </Section>
  );
}

function Row({ exp, index }: { exp: ExperienceT; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const year = exp.start.slice(0, 4);

  return (
    <li className="border-b border-ink-200/70 dark:border-ink-600/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group grid w-full grid-cols-12 items-baseline gap-4 py-6 text-left transition hover:bg-paper-100/50 dark:hover:bg-ink-800/40"
      >
        {/* Year */}
        <span className="col-span-3 sm:col-span-2 font-display text-3xl font-medium tracking-display text-ink-700 dark:text-paper-100 sm:text-5xl">
          {year}
        </span>
        {/* Role + Company */}
        <div className="col-span-9 sm:col-span-7">
          <div className="font-display text-xl font-medium leading-tight text-ink-800 dark:text-paper-50 sm:text-2xl">
            {exp.role}
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-300 dark:text-ink-200">
            {exp.company} · {exp.location}
          </div>
        </div>
        {/* Type tag + chevron */}
        <div className="col-span-12 sm:col-span-3 flex items-center justify-between sm:justify-end gap-3">
          <span className="tag">{TYPE_LABELS[exp.type]}</span>
          <span
            className={
              "inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition dark:border-ink-600 dark:text-paper-100 " +
              (open ? "rotate-180 bg-lime text-ink-900 border-lime" : "")
            }
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pb-8">
              <div className="col-span-12 sm:col-span-2 sm:col-start-3">
                <div className="label-mono">Period</div>
                <div className="mt-1 font-mono text-sm text-ink-700 dark:text-paper-100">
                  {exp.period}
                </div>
              </div>
              <div className="col-span-12 sm:col-span-7">
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-500 dark:text-ink-100 sm:text-[15px]">
                      <span className="mt-2 inline-block h-[3px] w-[3px] flex-none rounded-full bg-lime-600 dark:bg-lime" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {exp.stack && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

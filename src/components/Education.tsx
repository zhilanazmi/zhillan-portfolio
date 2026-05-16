import { motion } from "framer-motion";
import { educations } from "../data/cv";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      number="05"
      kicker="Education"
      title={
        <>
          Where I{" "}
          <span className="font-serif italic text-lime-600 dark:text-lime">
            learned
          </span>{" "}
          to think and build.
        </>
      }
    >
      <div className="space-y-3">
        {educations.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.05 * i }}
            className="grid grid-cols-12 items-baseline gap-4 border-t border-ink-200/70 py-6 dark:border-ink-600/40"
          >
            <span className="col-span-12 sm:col-span-2 font-mono text-[11px] uppercase tracking-wider text-ink-300 dark:text-ink-200">
              {edu.period}
            </span>
            <div className="col-span-12 sm:col-span-7">
              <div className="font-display text-2xl font-medium leading-tight sm:text-3xl">
                {edu.school}
              </div>
              <div className="mt-2 text-sm text-ink-500 dark:text-ink-100 sm:text-base">
                {edu.program}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-3 sm:text-right">
              <span className="tag">{edu.detail}</span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-ink-200/70 dark:border-ink-600/40" />
      </div>
    </Section>
  );
}

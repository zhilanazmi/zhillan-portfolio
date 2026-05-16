import { motion } from "framer-motion";
import { skills, certifications } from "../data/cv";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      kicker="Toolbox"
      title={
        <>
          What I use to{" "}
          <span className="font-serif italic text-lime-600 dark:text-lime">
            actually ship
          </span>{" "}
          things.
        </>
      }
    >
      <div className="space-y-2">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.04 * i }}
            className="hairline-bottom grid grid-cols-12 items-center gap-4 py-5"
          >
            <div className="col-span-12 sm:col-span-3 font-display text-2xl font-medium tracking-display sm:text-3xl">
              {cat.name}
            </div>
            <div className="col-span-12 sm:col-span-9 flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <div className="hairline-bottom flex items-baseline justify-between gap-4 pb-3">
          <span className="label-mono-bright">Certifications · 5</span>
          <span className="label-mono">Cisco · Google · CertiProf</span>
        </div>
        <ul className="divide-y divide-ink-200/70 dark:divide-ink-600/40">
          {certifications.map((c, i) => (
            <motion.li
              key={c.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: 0.04 * i }}
              className="grid grid-cols-12 items-baseline gap-3 py-4"
            >
              <span className="col-span-2 sm:col-span-1 font-mono text-[11px] uppercase tracking-wider text-ink-300 dark:text-ink-200">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span className="col-span-10 sm:col-span-8 font-display text-base text-ink-700 dark:text-paper-100 sm:text-lg">
                {c.name}
              </span>
              <span className="col-span-12 sm:col-span-3 sm:text-right">
                <span className="tag">{c.issuer}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

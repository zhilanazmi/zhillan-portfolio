import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  number: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  number,
  kicker,
  title,
  intro,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={"relative scroll-mt-20 py-24 sm:py-32 " + className}
    >
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="hairline-bottom flex flex-wrap items-baseline justify-between gap-4 pb-4"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 dark:text-ink-200">
              ({number})
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 dark:text-paper-100">
              / {kicker}
            </span>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 dark:text-ink-200 sm:inline">
            §{number}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="display-title mt-6 max-w-4xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h2>

        {intro && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 max-w-3xl text-base text-ink-500 dark:text-ink-100 sm:text-lg"
          >
            {intro}
          </motion.div>
        )}

        <div className="mt-14 sm:mt-20">{children}</div>
      </div>
    </section>
  );
}

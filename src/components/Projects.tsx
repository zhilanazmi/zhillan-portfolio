import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "../data/cv";
import { Section } from "./Section";

const FILTERS: Array<"All" | Project["status"]> = [
  "All",
  "Production",
  "Internship",
  "Active",
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <Section
      id="projects"
      number="03"
      kicker="Selected work"
      title={
        <>
          Things I've{" "}
          <span className="font-serif italic text-lime-600 dark:text-lime">
            actually shipped
          </span>
          .
        </>
      }
      intro="Filter by phase. Open a card for context, highlights, and the stack."
    >
      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f;
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.status === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition " +
                (active
                  ? "border-ink-900 bg-ink-900 text-paper-50 dark:border-paper-100 dark:bg-paper-100 dark:text-ink-900"
                  : "border-ink-200 bg-paper-50 text-ink-500 hover:border-ink-500 dark:border-ink-600 dark:bg-ink-800/60 dark:text-paper-100")
              }
            >
              {f}
              <span
                className={
                  "rounded-full px-1.5 py-px text-[10px] " +
                  (active
                    ? "bg-paper-50/20 text-paper-50 dark:bg-ink-900/20 dark:text-ink-900"
                    : "bg-ink-100 text-ink-500 dark:bg-ink-700 dark:text-paper-100")
                }
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bento grid: variable spans */}
      <motion.div
        layout
        className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  // Asymmetric bento: vary spans by position
  const spans = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-2",
    "lg:col-span-4",
  ];
  const span = spans[index % spans.length];

  const statusColors: Record<Project["status"], string> = {
    Production: "bg-lime text-ink-900",
    Internship:
      "border border-ink-900 text-ink-900 dark:border-paper-100 dark:text-paper-100",
    Active: "bg-coral text-paper-50",
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
      className={
        "group relative flex flex-col justify-between gap-5 rounded-2xl border border-ink-200 bg-paper-50 p-6 transition hover:border-ink-700 dark:border-ink-600 dark:bg-ink-800/60 dark:hover:border-paper-100 " +
        span
      }
    >
      <div className="flex items-start justify-between gap-3">
        <span className="label-mono">{project.context}</span>
        <span
          className={
            "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider " +
            statusColors[project.status]
          }
        >
          {project.status}
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="display-title text-2xl sm:text-3xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-100">
          {project.blurb}
        </p>
      </div>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden space-y-2 text-sm text-ink-500 dark:text-ink-100"
            >
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 inline-block h-[3px] w-[3px] flex-none rounded-full bg-lime-600 dark:bg-lime" />
                  <span>{h}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-700 underline-offset-4 hover:underline dark:text-paper-100"
          >
            {expanded ? "Hide details" : "Show details"}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={"transition " + (expanded ? "rotate-180" : "")}
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

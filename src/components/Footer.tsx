import { LocalClock } from "./LocalClock";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline mt-10 pb-12 pt-10">
      <div className="container-px flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="label-mono">© {year}</div>
          <div className="mt-2 font-display text-2xl font-medium tracking-display sm:text-3xl">
            Zhillan Azmi
          </div>
          <div className="mt-1 max-w-md text-sm text-ink-500 dark:text-ink-100">
            Built from scratch with React, Vite, Tailwind, and a little
            obsession with details.
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm sm:items-end">
          <div className="label-mono">Now in Bandung</div>
          <div className="font-mono text-base text-ink-700 dark:text-paper-100">
            <LocalClock />
          </div>
          <a
            href="#top"
            className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-ink-500 hover:text-ink-900 dark:text-ink-200 dark:hover:text-paper-50"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

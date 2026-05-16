import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/cv";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (scrolled
          ? "border-b border-ink-200/60 bg-paper-50/85 backdrop-blur dark:border-ink-600/40 dark:bg-ink-900/85"
          : "border-b border-transparent bg-transparent")
      }
    >
      <div className="container-px flex h-14 items-center justify-between">
        <a
          href="#top"
          aria-label="Home"
          className="group flex items-baseline gap-1 font-display text-lg font-semibold tracking-display"
        >
          <span>Zhillan</span>
          <span className="text-lime-600 dark:text-lime">/</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 dark:text-ink-200">
            Azmi
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, idx) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={
                  "group relative inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition " +
                  (isActive
                    ? "text-ink-900 dark:text-paper-50"
                    : "text-ink-300 hover:text-ink-700 dark:text-ink-200 dark:hover:text-paper-100")
                }
              >
                <span className="text-ink-200 dark:text-ink-300">
                  ({(idx + 1).toString().padStart(2, "0")})
                </span>
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-px bg-lime"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="hidden md:inline-flex btn-lime">
            Get in touch
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 md:hidden dark:border-paper-100/15 dark:text-paper-100"
            aria-label="Open menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-[2px] md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="fixed left-0 right-0 top-0 z-50 max-h-[100dvh] overflow-y-auto bg-paper-50 p-6 md:hidden dark:bg-ink-900"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="label-mono-bright">Menu / 06 items</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 dark:border-paper-100/15 dark:text-paper-100"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col">
                {navLinks.map((link, idx) => {
                  const isActive = active === link.id;
                  return (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.3 }}
                      className={
                        "flex items-baseline justify-between border-t border-ink-200/70 py-5 dark:border-ink-600/40 " +
                        (idx === navLinks.length - 1
                          ? "border-b "
                          : "")
                      }
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-200 dark:text-ink-300">
                          ({(idx + 1).toString().padStart(2, "0")})
                        </span>
                        <span
                          className={
                            "font-display text-3xl font-medium tracking-display " +
                            (isActive ? "text-ink-900 dark:text-paper-50" : "")
                          }
                        >
                          {link.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="inline-block h-2 w-2 rounded-full bg-lime" />
                      )}
                    </motion.a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-8 btn-lime w-full justify-center"
                >
                  Get in touch
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

import { motion } from "framer-motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      number="01"
      kicker="About"
      title={
        <>
          I help teams ship{" "}
          <span className="font-serif italic text-lime-600 dark:text-lime">
            calm, responsive
          </span>{" "}
          web apps —{" "}
          <span className="font-serif italic">without the drama.</span>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-12">
        {/* Long-form text */}
        <div className="md:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-ink-500 dark:text-ink-100 sm:text-lg">
            <p>
              I'm a final-year Informatics student at{" "}
              <span className="text-ink-700 dark:text-paper-100">
                Institut Teknologi Nasional Bandung
              </span>{" "}
              and a working web developer with{" "}
              <span className="text-ink-700 dark:text-paper-100">
                3+ years of real engineering experience
              </span>
              .
            </p>
            <p>
              Lately I've been deep in Laravel-land — shipping SOP management
              systems, logistics platforms, and interactive flowchart editors
              for production teams at PT. Timah Industri and PT. Alita Praya
              Mitra.
            </p>
            <p>
              Outside of that, I co-lead Research &amp; Technology at HMIF
              ITENAS, design landing pages for{" "}
              <span className="text-ink-700 dark:text-paper-100">
                Plastic Guardian
              </span>
              , and study cybersecurity in my off-hours (Cisco + CertiProf
              certified).
            </p>
          </div>
        </div>

        {/* Bento mosaic */}
        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            <StatCell big="3+" label="Years building web apps" />
            <StatCell big="9" label="Roles · internships · gigs" />
            <StatCell
              big="6+"
              label="Departments centralized at PT. Timah"
              accent
              full
            />
            <StatCell big="3.63" label="GPA · ITENAS Bandung" />
            <StatCell big="5" label="Certifications" />
          </div>
        </div>
      </div>

      {/* Personality strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.5 }}
        className="hairline mt-20 grid grid-cols-2 gap-4 pt-8 text-sm sm:grid-cols-4"
      >
        <PersonaCell title="Builds" body="SOPs · landing pages · APIs" />
        <PersonaCell title="Leads" body="HMIF Research & Tech, 2025" />
        <PersonaCell title="Studies" body="Cybersecurity · Networking" />
        <PersonaCell title="Creates" body="Content · social engagement" />
      </motion.div>
    </Section>
  );
}

function StatCell({
  big,
  label,
  accent = false,
  full = false,
}: {
  big: string;
  label: string;
  accent?: boolean;
  full?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={
        "flex flex-col justify-between gap-6 rounded-2xl p-5 " +
        (full ? "col-span-2 " : "") +
        (accent
          ? "bg-ink-900 text-paper-50 dark:bg-lime dark:text-ink-900"
          : "border border-ink-200 bg-paper-100/60 text-ink-700 dark:border-ink-600 dark:bg-ink-800/60 dark:text-paper-100")
      }
    >
      <div
        className={
          "font-display font-medium tracking-display " +
          (full ? "text-6xl sm:text-7xl" : "text-5xl")
        }
      >
        {big}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-wider opacity-80">
        {label}
      </div>
    </motion.div>
  );
}

function PersonaCell({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="label-mono">{title}</span>
      <span className="font-display text-base text-ink-700 dark:text-paper-100">
        {body}
      </span>
    </div>
  );
}

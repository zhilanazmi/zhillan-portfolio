const STACK = [
  "Laravel",
  "JavaScript",
  "MySQL",
  "PHP",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "Linux",
  "REST APIs",
  "Sanctum",
  "Responsive UX",
  "Cybersecurity",
];

export function Marquee() {
  return (
    <div className="hairline-bottom hairline relative overflow-hidden bg-ink-900 py-5 text-paper-50 dark:bg-paper-50 dark:text-ink-900">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...STACK, ...STACK].map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-6 font-display text-3xl font-medium tracking-display sm:text-4xl"
          >
            {item}
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 0L10.7 7.3L18 9L10.7 10.7L9 18L7.3 10.7L0 9L7.3 7.3L9 0Z"
        fill="#D4FA3B"
      />
    </svg>
  );
}

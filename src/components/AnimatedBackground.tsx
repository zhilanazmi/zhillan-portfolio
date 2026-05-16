// Subtle paper texture background — no gradient blobs, no AI-template look.
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="noise absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" />
    </div>
  );
}

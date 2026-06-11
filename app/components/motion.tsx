"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CheckCircle2, ChevronDown, Menu, X } from "lucide-react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* ------------------------------------------------------------------ */
/* Reveal — fades + slides children in when they enter the viewport    */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgress — thin gradient bar under the sticky nav             */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-cosmetic"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SpotlightCard — radial glow that follows the cursor                 */
/* ------------------------------------------------------------------ */

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AnimatedDefectPanel — live mock that cycles through label states    */
/* ------------------------------------------------------------------ */

type Tone = "major" | "minor" | "cosmetic";

const SCENARIOS: {
  severity: string;
  type: string;
  tone: Tone;
  comment: string;
}[] = [
  {
    severity: "Major",
    type: "Missing",
    tone: "major",
    comment:
      "The auth header is never validated — reject with 401 before touching the database.",
  },
  {
    severity: "Minor",
    type: "Inconsistent",
    tone: "minor",
    comment: "We're using camelCase everywhere else in this file — rename it.",
  },
  {
    severity: "Cosmetic",
    type: "Improvement",
    tone: "cosmetic",
    comment: "Could be a one-liner with Array.from — easier to scan.",
  },
];

const TONE_STYLES: Record<
  Tone,
  { chip: string; panel: string; pill: string; text: string }
> = {
  major: {
    chip: "bg-major/15 text-major",
    panel: "border-major/30 bg-major/5",
    pill: "border-major/50 bg-major/15 text-major",
    text: "text-major",
  },
  minor: {
    chip: "bg-minor/15 text-minor",
    panel: "border-minor/30 bg-minor/5",
    pill: "border-minor/50 bg-minor/15 text-minor",
    text: "text-minor",
  },
  cosmetic: {
    chip: "bg-cosmetic/15 text-cosmetic",
    panel: "border-cosmetic/30 bg-cosmetic/5",
    pill: "border-cosmetic/50 bg-cosmetic/15 text-cosmetic",
    text: "text-cosmetic",
  },
};

const SEVERITIES: { text: string; tone: Tone }[] = [
  { text: "Major", tone: "major" },
  { text: "Minor", tone: "minor" },
  { text: "Cosmetic", tone: "cosmetic" },
];

const TYPES = ["Missing", "Extra", "Inconsistent", "Improvement"];

export function AnimatedDefectPanel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = containerRef.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !interval) {
          interval = setInterval(
            () => setIndex((i) => (i + 1) % SCENARIOS.length),
            3000
          );
        } else if (!entry.isIntersecting && interval) {
          clearInterval(interval);
          interval = undefined;
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const scenario = SCENARIOS[index];
  const tone = TONE_STYLES[scenario.tone];
  const label = `#${scenario.severity}:${scenario.type}`;

  return (
    <div ref={containerRef} className="space-y-3 p-4">
      {/* Comment with the inserted label */}
      <div className="rounded-lg border border-border bg-card/60 px-3 py-2.5 font-mono text-xs leading-relaxed">
        <span
          key={`chip-${label}`}
          className={`animate-pop inline-block rounded px-1 py-0.5 font-semibold ${tone.chip}`}
        >
          {label}
        </span>{" "}
        <span
          key={`comment-${index}`}
          className="animate-fade-swap inline text-muted-foreground"
        >
          {scenario.comment}
        </span>
      </div>

      {/* The panel itself */}
      <div
        className={`rounded-lg border p-3 transition-colors duration-500 ${tone.panel}`}
      >
        <label className="flex items-center gap-2 text-xs font-medium">
          <span className="flex h-4 w-4 items-center justify-center rounded border border-primary/50 bg-primary/20">
            <CheckCircle2 className="h-3 w-3 text-primary" />
          </span>
          Mark as Defect
        </label>

        <div className="mt-3 space-y-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="w-14 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Severity
            </span>
            {SEVERITIES.map((s) => (
              <span
                key={s.text}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors duration-300 ${
                  s.text === scenario.severity
                    ? TONE_STYLES[s.tone].pill
                    : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {s.text}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="w-14 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Type
            </span>
            {TYPES.map((t) => (
              <span
                key={t}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors duration-300 ${
                  t === scenario.type
                    ? tone.pill
                    : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {t}
              </span>
            ))}
            <span className="rounded-full border border-border bg-muted/30 px-2 py-1 text-[11px] text-muted-foreground">
              …
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5">
          <span
            key={`preview-${label}`}
            className={`animate-pop font-mono text-[11px] font-semibold ${tone.text}`}
          >
            {label}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
            <CheckCircle2 className="h-3 w-3 text-primary" /> ready to submit
          </span>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <span className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground">
          Cancel
        </span>
        <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
          Add review comment
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQItem — accessible accordion with smooth height animation         */
/* ------------------------------------------------------------------ */

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`transition-colors duration-300 ${open ? "bg-card/40" : ""}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-sm font-medium text-foreground md:text-base">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MobileNav — disclosure menu for small screens                       */
/* ------------------------------------------------------------------ */

export function MobileNav({
  links,
  cta,
}: {
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card/60 text-foreground transition-colors duration-200 hover:bg-card"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      <div
        className={`absolute inset-x-0 top-full grid border-border/60 bg-background/95 backdrop-blur-xl transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr] border-b" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-card hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-foreground px-3 py-2.5 text-center text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90"
            >
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

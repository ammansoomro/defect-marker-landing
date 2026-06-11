import Image from "next/image";
import panelCollapsed from "@/assets/image01.png";
import panelExpanded from "@/assets/image02.png";
import extensionIcon from "@/assets/icon.png";
import {
  ShieldCheck,
  Tag,
  Github,
  ArrowRight,
  GitPullRequest,
  AlertTriangle,
  Palette,
  Accessibility,
  Check,
  X,
} from "lucide-react";
import {
  AnimatedDefectPanel,
  FAQItem,
  MobileNav,
  Reveal,
  ScrollProgress,
} from "./components/motion";

const VERSION = "v1.0.0";
const REPO_URL = "https://github.com/ammansoomro/github-defect-marker";

const NAV_LINKS = [
  { href: "#why", label: "Why" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How" },
  { href: "#labels", label: "Labels" },
  { href: "#faq", label: "FAQ" },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Page-wide backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint" />
      <div className="animate-aurora pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-aurora" />

      <ScrollProgress />
      <Nav />
      <div className="relative">
        <Hero />
        <Ticker />
        <ProblemFix />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Labels />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1 shadow-glow backdrop-blur">
            <Image
              src={extensionIcon}
              alt="GitHub Defect Marker icon"
              className="h-full w-full rounded-lg"
            />
          </span>
          <span className="text-sm font-bold tracking-tight">
            DEFECT<span className="text-gradient">_</span>MARKER
          </span>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline">
            {VERSION}
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={REPO_URL}
            className="btn-glow hidden items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold text-white md:inline-flex"
          >
            Add to Chrome
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <MobileNav links={NAV_LINKS} cta={{ href: REPO_URL, label: "Add to Chrome" }} />
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — split layout: copy left, live glass demo right               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="animate-enter inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            Chrome extension · works on github.com
          </div>

          <h1
            className="animate-enter mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Vague code reviews{" "}
            <span className="text-gradient whitespace-nowrap">end here.</span>
          </h1>

          <p
            className="animate-enter mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Defect Marker adds one-click{" "}
            <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-sm font-semibold text-foreground">
              #Severity:Type
            </code>{" "}
            labels to every GitHub PR comment. Reviews become searchable,
            severity becomes obvious, and nothing slips through.
          </p>

          <div
            className="animate-enter mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={REPO_URL}
              className="btn-glow inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
            >
              <ChromeIcon className="h-4 w-4" />
              Add to Chrome — Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={REPO_URL}
              className="btn-glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              <Github className="h-4 w-4" />
              View source
            </a>
          </div>

          <ul
            className="animate-enter mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs font-medium text-muted-foreground"
            style={{ animationDelay: "400ms" }}
          >
            {["Zero permissions", "No account", "100% local"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Live demo card */}
        <Reveal delay={200} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/15 blur-3xl" />
          <div className="absolute -right-2 -top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cosmetic" />
            Live demo
          </div>
          <div className="glass-card overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-major/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-minor/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-cosmetic/80" />
              <span className="mx-auto flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                <Github className="h-3 w-3" />
                github.com/acme/api/pull/1432
              </span>
            </div>
            <div className="border-b border-white/10 px-4 py-2.5 text-xs font-semibold text-muted-foreground">
              Write a review comment
            </div>
            <AnimatedDefectPanel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChromeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v8M3.5 7l7 4M20.5 7l-7 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Ticker — scrolling band of real labels                              */
/* ------------------------------------------------------------------ */

const TICKER_LABELS = [
  { text: "#Major:Missing", cls: "text-major border-major/30 bg-major/10" },
  { text: "#Minor:Inconsistent", cls: "text-minor border-minor/30 bg-minor/10" },
  { text: "#Cosmetic:Improvement", cls: "text-cosmetic border-cosmetic/30 bg-cosmetic/10" },
  { text: "#Major:Risk-prone", cls: "text-major border-major/30 bg-major/10" },
  { text: "#Minor:Ambiguous", cls: "text-minor border-minor/30 bg-minor/10" },
  { text: "#Cosmetic:Extra", cls: "text-cosmetic border-cosmetic/30 bg-cosmetic/10" },
  { text: "#Major:Factually-Incorrect", cls: "text-major border-major/30 bg-major/10" },
  { text: "#Minor:Extra", cls: "text-minor border-minor/30 bg-minor/10" },
];

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-4 pr-4">
      {TICKER_LABELS.map((l) => (
        <span
          key={l.text}
          className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-semibold backdrop-blur ${l.cls}`}
        >
          {l.text}
        </span>
      ))}
    </div>
  );
}

function Ticker() {
  return (
    <section className="marquee border-y border-white/10 bg-white/[0.02] py-4 backdrop-blur">
      <div className="marquee-track">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section header — left-aligned, indexed                              */
/* ------------------------------------------------------------------ */

function SectionHeader({
  index,
  eyebrow,
  title,
  sub,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest">
        <span className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 px-2.5 py-1 text-primary">
          {index}
        </span>
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
        {sub}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Problem → Fix                                                       */
/* ------------------------------------------------------------------ */

function ProblemFix() {
  const without = [
    { quote: "“this looks wrong”", note: "No severity. No category. No follow-up." },
    { quote: "“nit: clean this up later”", note: "“Later” never comes." },
    { quote: "“??”", note: "Fifteen replies to figure out what it meant." },
  ];
  const withLabels = [
    {
      label: "#Major:Missing",
      cls: "bg-major/20 text-major",
      note: "Auth header never validated — reject with 401.",
    },
    {
      label: "#Minor:Inconsistent",
      cls: "bg-minor/20 text-minor",
      note: "camelCase everywhere else in this file.",
    },
    {
      label: "#Cosmetic:Improvement",
      cls: "bg-cosmetic/20 text-cosmetic",
      note: "One-liner with Array.from.",
    },
  ];
  return (
    <section id="why">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="01"
            eyebrow="The problem"
            title="Reviews without structure don't scale."
            sub="Unlabeled comments can't be searched, sorted, or audited. Six months later, nobody knows what was a blocker and what was a nitpick."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card hover-lift h-full rounded-2xl p-6 hover:border-major/30">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs font-bold uppercase tracking-widest text-major">
                <X className="h-4 w-4" strokeWidth={3} />
                Review without labels
              </div>
              <ul className="mt-4 space-y-4">
                {without.map((w) => (
                  <li key={w.quote} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-major/30 bg-major/10 text-major">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-mono text-sm font-semibold">{w.quote}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{w.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass-card hover-lift h-full rounded-2xl p-6 ring-1 ring-primary/20 hover:border-primary/30">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs font-bold uppercase tracking-widest text-primary">
                <Check className="h-4 w-4" strokeWidth={3} />
                Review with Defect Marker
              </div>
              <ul className="mt-4 space-y-4">
                {withLabels.map((w) => (
                  <li key={w.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <div>
                      <span className={`rounded px-1.5 py-0.5 font-mono text-xs font-bold ${w.cls}`}>
                        {w.label}
                      </span>
                      <p className="mt-1.5 text-sm text-muted-foreground">{w.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features — numbered spec-sheet rows                                 */
/* ------------------------------------------------------------------ */

function Features() {
  const items = [
    {
      icon: GitPullRequest,
      title: "Smart detection",
      body: "Finds every comment editor across PR conversations, reviews, replies, and inline diffs — layered discovery survives GitHub's soft navigation and lazy rendering.",
    },
    {
      icon: Tag,
      title: "One-click pills",
      body: "No dropdowns. Every Severity and Defect Type is visible at a glance and selected with a single click or the arrow keys. The label is inserted for you.",
    },
    {
      icon: ShieldCheck,
      title: "Submission guard",
      body: "Submit buttons stay disabled while a defect classification is incomplete or its label was deleted — labels never get lost in long review threads.",
    },
    {
      icon: Palette,
      title: "Native theming",
      body: "The panel reads GitHub's own Primer CSS variables, so it matches light, dark, dimmed, and high-contrast themes automatically.",
    },
    {
      icon: AlertTriangle,
      title: "Severity at a glance",
      body: "Color-coded Major / Minor / Cosmetic tints flow through the pills, the preview chip, and the panel border — triage is obvious for the next reviewer.",
    },
    {
      icon: Accessibility,
      title: "Accessible by default",
      body: "Real form controls, visible focus rings, aria-live validation messages, and full prefers-reduced-motion support.",
    },
  ];

  return (
    <section id="features" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Features"
            title="Everything reviewers need, nothing they don't."
            sub="Defect Marker stays out of the way until you need it — then it makes labeling a single, deliberate action."
          />
        </Reveal>
        <div className="mt-12 border-t border-white/10">
          {items.map((it, i) => (
            <Reveal key={it.title}>
              <div className="group grid gap-3 border-b border-white/10 py-6 transition-colors duration-200 hover:bg-white/[0.04] md:grid-cols-[90px_280px_1fr] md:items-start md:gap-8 md:py-7">
                <span className="font-mono text-sm font-bold text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <it.icon className="h-4 w-4" />
                  </span>
                  {it.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const steps = [
    {
      title: "Open a pull request",
      body: "Defect Marker activates automatically in any GitHub PR comment editor — legacy UI or the new React-based one.",
    },
    {
      title: "Mark as defect",
      body: "A compact panel sits between the editor and its footer. Tick the checkbox and the pill groups animate open.",
    },
    {
      title: "Pick severity & type",
      body: "One click each: Major, Minor, or Cosmetic, then Missing, Extra, Risk-prone, and more. The label is prepended for you.",
    },
    {
      title: "Submit with confidence",
      body: "Submit stays disabled until the label is valid and present. Your team gets searchable, consistent feedback.",
    },
  ];
  return (
    <section id="how" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="How it works"
            title="From open PR to labeled defect in seconds."
            sub="Four steps. No configuration. Compatible with every GitHub UI variation we've seen."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="h-full">
              <div className="glass-card hover-lift relative h-full rounded-2xl p-6 hover:border-primary/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-white shadow-glow">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-8 hidden h-4 w-4 text-muted-foreground lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Screenshots                                                         */
/* ------------------------------------------------------------------ */

function Screenshots() {
  return (
    <section id="demo" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="04"
            eyebrow="In the wild"
            title="The real thing, inside a real PR."
            sub="Actual screenshots from a GitHub pull request — the panel waits quietly under the comment box, then expands into one-click pills."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ScreenshotCard
              step="Before"
              stepCls="border-white/15 bg-white/10 text-muted-foreground"
              title="A quiet checkbox under every comment box"
              body="Open any inline comment on a PR and 'Mark as Defect' is already there — no popups, no setup. Leave it unticked and GitHub behaves exactly as normal."
              image={panelCollapsed}
              alt="GitHub PR comment box with the collapsed 'Mark as Defect' checkbox added below the editor"
            />
          </Reveal>
          <Reveal delay={150}>
            <ScreenshotCard
              step="After"
              stepCls="border-primary/40 bg-gradient-to-r from-primary/30 to-accent/30 text-foreground"
              title="Tick it, click two pills, done"
              body="Severity and Defect Type expand as color-coded pills. Picking Minor + Risk-prone prepends #Minor:Risk-prone to the comment and shows it in the live preview chip."
              image={panelExpanded}
              alt="Expanded Defect Marker panel showing severity and defect type pills with the #Minor:Risk-prone label inserted"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ScreenshotCard({
  step,
  stepCls,
  title,
  body,
  image,
  alt,
}: {
  step: string;
  stepCls: string;
  title: string;
  body: string;
  image: typeof panelCollapsed;
  alt: string;
}) {
  return (
    <figure className="glass-card hover-lift flex h-full flex-col overflow-hidden rounded-2xl hover:border-white/20">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest ${stepCls}`}
        >
          {step}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          fig. {step === "Before" ? "1" : "2"}
        </span>
      </div>
      <div className="border-b border-white/10 bg-black/20 p-3">
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          unoptimized
          className="mx-auto w-full max-w-[640px] rounded-xl border border-white/10"
        />
      </div>
      <figcaption className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Labels taxonomy                                                     */
/* ------------------------------------------------------------------ */

function Labels() {
  const groups = [
    {
      severity: "Major",
      band: "bg-major/15 text-major",
      desc: "Must be fixed before approval.",
      examples: ["Missing", "Risk-prone", "Factually-Incorrect"],
    },
    {
      severity: "Minor",
      band: "bg-minor/15 text-minor",
      desc: "Should be fixed, but not a blocker.",
      examples: ["Extra", "Inconsistent", "Ambiguous"],
    },
    {
      severity: "Cosmetic",
      band: "bg-cosmetic/15 text-cosmetic",
      desc: "Style and polish level issues.",
      examples: ["Improvement", "Inconsistent", "Extra"],
    },
  ];
  return (
    <section id="labels" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="05"
            eyebrow="The taxonomy"
            title="Three severities. Seven types. One source of truth."
            sub="Every defect comment gets a structured #Severity:Type tag — searchable, sortable, and instantly recognizable."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.severity} delay={i * 100} className="h-full">
              <div className="glass-card hover-lift flex h-full flex-col overflow-hidden rounded-2xl hover:border-white/20">
                <div
                  className={`flex items-center justify-between border-b border-white/10 px-4 py-3 ${g.band}`}
                >
                  <span className="font-mono text-sm font-bold">#{g.severity}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                    severity
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-medium">{g.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {g.examples.map((e) => (
                      <span
                        key={e}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] font-semibold text-muted-foreground"
                      >
                        :{e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glass-card mt-10 overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Github className="h-3.5 w-3.5" />
                comment.body
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                preview
              </span>
            </div>
            <pre className="overflow-x-auto bg-black/30 p-6 font-mono text-sm leading-relaxed">
              {"> "}
              <span className="rounded bg-major/20 px-1.5 py-0.5 font-bold text-major">
                #Major:Missing
              </span>
              {` This endpoint never validates the auth header — request
should reject with 401 before touching the database.

> `}
              <span className="rounded bg-minor/20 px-1.5 py-0.5 font-bold text-minor">
                #Minor:Inconsistent
              </span>
              {` We're using camelCase elsewhere in this file.

> `}
              <span className="rounded bg-cosmetic/20 px-1.5 py-0.5 font-bold text-cosmetic">
                #Cosmetic:Improvement
              </span>
              {` Could be a one-liner with Array.from.`}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

function FAQ() {
  const items = [
    {
      q: "Does it work with the new GitHub UI?",
      a: "Yes. Defect Marker detects both the legacy form-based UI and the redesigned React-based comment editor, writing labels through React-safe text insertion so both UIs honor them.",
    },
    {
      q: "Does it send my comments anywhere?",
      a: "No. Everything runs locally in your browser. The extension requests zero Chrome permissions — no background worker, no network requests, no storage, no telemetry.",
    },
    {
      q: "Will it clash with my GitHub theme?",
      a: "No. The panel is styled entirely with GitHub's own Primer CSS variables, so it follows light, dark, dark-dimmed, and high-contrast themes automatically.",
    },
    {
      q: "Will it interfere with normal comments?",
      a: "No. Labels are only enforced when you explicitly tick 'Mark as Defect'. Regular comments work exactly as before, and the extension only re-enables buttons it disabled itself.",
    },
    {
      q: "Can I customize the severity or type options?",
      a: "The defaults match common review conventions (Major / Minor / Cosmetic and seven defect types). Custom presets are on the roadmap.",
    },
  ];
  return (
    <section id="faq" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="06"
            eyebrow="FAQ"
            title="Answers, before you ask."
            sub="Still curious? Open an issue on the repo and we'll get back to you."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-card mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl">
            {items.map((it) => (
              <FAQItem key={it.q} question={it.q} answer={it.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA                                                                 */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div className="animate-aurora pointer-events-none absolute inset-0 bg-aurora opacity-80" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                Free · open source · zero permissions
              </div>
              <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
                Install in under{" "}
                <span className="text-gradient">30 seconds.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground md:text-lg">
                Add Defect Marker to Chrome and your next review comment ships
                with a label your whole team can search.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={REPO_URL}
                  className="btn-glow inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-bold text-white"
                >
                  <ChromeIcon className="h-4 w-4" />
                  Add to Chrome — Free
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={REPO_URL}
                  className="btn-glass inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-0.5">
            <Image src={extensionIcon} alt="" className="h-full w-full rounded" />
          </span>
          <span className="font-bold text-foreground">DEFECT_MARKER</span>
          <span>{VERSION}</span>
        </div>
        <div className="flex items-center gap-6 uppercase tracking-widest">
          <a href="#features" className="transition-colors duration-200 hover:text-foreground">
            Features
          </a>
          <a href="#faq" className="transition-colors duration-200 hover:text-foreground">
            FAQ
          </a>
          <a href={REPO_URL} className="transition-colors duration-200 hover:text-foreground">
            GitHub
          </a>
        </div>
        <span>© {new Date().getFullYear()} · MIT</span>
      </div>
    </footer>
  );
}

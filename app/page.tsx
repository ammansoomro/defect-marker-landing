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
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />
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
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-card p-1">
            <Image src={extensionIcon} alt="GitHub Defect Marker icon" className="h-full w-full" />
          </span>
          <span className="text-sm font-bold tracking-tight">
            DEFECT<span className="text-primary">_</span>MARKER
          </span>
          <span className="hidden border-2 border-ink bg-muted px-1.5 py-0.5 font-mono text-[10px] font-bold sm:inline">
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
            className="btn-hard hidden items-center gap-1.5 bg-primary px-3.5 py-2 text-xs font-bold text-white md:inline-flex"
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
/* Hero — split layout: spec-sheet copy left, live demo right          */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="bg-blueprint border-b-2 border-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="animate-enter inline-flex items-center gap-2 border-2 border-ink bg-card px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest">
            <span className="h-2 w-2 bg-primary" />
            Chrome extension · works on github.com
          </div>

          <h1
            className="animate-enter mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Vague code reviews{" "}
            <span className="hl-marker whitespace-nowrap">end here.</span>
          </h1>

          <p
            className="animate-enter mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Defect Marker adds one-click{" "}
            <code className="border border-line bg-card px-1.5 py-0.5 font-mono text-sm font-bold text-foreground">
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
              className="btn-hard inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold text-white"
            >
              <ChromeIcon className="h-4 w-4" />
              Add to Chrome — Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={REPO_URL}
              className="btn-hard inline-flex items-center gap-2 bg-card px-6 py-3.5 text-sm font-bold"
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
          <div className="absolute -right-2 -top-4 z-10 rotate-6 border-2 border-ink bg-[#FFE14D] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider">
            Live demo
          </div>
          <div className="card-hard overflow-hidden">
            <div className="flex items-center gap-2 border-b-2 border-ink bg-ink px-4 py-2.5">
              <span className="h-2.5 w-2.5 border border-paper/40 bg-major" />
              <span className="h-2.5 w-2.5 border border-paper/40 bg-minor" />
              <span className="h-2.5 w-2.5 border border-paper/40 bg-primary" />
              <span className="mx-auto flex items-center gap-1.5 font-mono text-[11px] text-paper/80">
                <Github className="h-3 w-3" />
                github.com/acme/api/pull/1432
              </span>
            </div>
            <div className="border-b-2 border-line px-4 py-2.5 text-xs font-bold">
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
  { text: "#Major:Missing", cls: "text-major" },
  { text: "#Minor:Inconsistent", cls: "text-minor" },
  { text: "#Cosmetic:Improvement", cls: "text-cosmetic" },
  { text: "#Major:Risk-prone", cls: "text-major" },
  { text: "#Minor:Ambiguous", cls: "text-minor" },
  { text: "#Cosmetic:Extra", cls: "text-cosmetic" },
  { text: "#Major:Factually-Incorrect", cls: "text-major" },
  { text: "#Minor:Extra", cls: "text-minor" },
];

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-4 pr-4">
      {TICKER_LABELS.map((l) => (
        <span
          key={l.text}
          className={`border-2 border-ink bg-card px-3 py-1.5 font-mono text-xs font-bold ${l.cls}`}
        >
          {l.text}
        </span>
      ))}
    </div>
  );
}

function Ticker() {
  return (
    <section className="marquee border-b-2 border-ink bg-muted py-4">
      <div className="marquee-track">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section header — left-aligned, indexed like a spec sheet            */
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
        <span className="border-2 border-ink bg-primary px-2 py-1 text-white">
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
    { label: "#Major:Missing", cls: "bg-major", note: "Auth header never validated — reject with 401." },
    { label: "#Minor:Inconsistent", cls: "bg-minor", note: "camelCase everywhere else in this file." },
    { label: "#Cosmetic:Improvement", cls: "bg-cosmetic", note: "One-liner with Array.from." },
  ];
  return (
    <section id="why" className="border-b-2 border-ink">
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
            <div className="card-hard h-full p-6">
              <div className="flex items-center gap-2 border-b-2 border-line pb-4 font-mono text-xs font-bold uppercase tracking-widest text-major">
                <X className="h-4 w-4" strokeWidth={3} />
                Review without labels
              </div>
              <ul className="mt-4 space-y-4">
                {without.map((w) => (
                  <li key={w.quote} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-major/40 text-major">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-mono text-sm font-bold">{w.quote}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{w.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="card-hard h-full p-6 [--hard:hsl(var(--primary))]">
              <div className="flex items-center gap-2 border-b-2 border-line pb-4 font-mono text-xs font-bold uppercase tracking-widest text-primary">
                <Check className="h-4 w-4" strokeWidth={3} />
                Review with Defect Marker
              </div>
              <ul className="mt-4 space-y-4">
                {withLabels.map((w) => (
                  <li key={w.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-primary/50 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <div>
                      <span className={`px-1.5 py-0.5 font-mono text-xs font-bold text-white ${w.cls}`}>
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
/* Features — numbered spec-sheet rows, not cards                      */
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
    <section id="features" className="bg-blueprint border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Features"
            title="Everything reviewers need, nothing they don't."
            sub="Defect Marker stays out of the way until you need it — then it makes labeling a single, deliberate action."
          />
        </Reveal>
        <div className="mt-12 border-t-2 border-ink">
          {items.map((it, i) => (
            <Reveal key={it.title}>
              <div className="group grid gap-3 border-b-2 border-ink py-6 transition-colors duration-200 hover:bg-card md:grid-cols-[90px_280px_1fr] md:items-start md:gap-8 md:py-7">
                <span className="font-mono text-sm font-bold text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-card transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <it.icon className="h-4.5 w-4.5" />
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
    <section id="how" className="border-b-2 border-ink">
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
              <div className="card-hard relative h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-primary font-mono text-sm font-bold text-white">
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
    <section id="demo" className="bg-blueprint border-b-2 border-ink">
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
              stepCls="bg-muted text-foreground"
              title="A quiet checkbox under every comment box"
              body="Open any inline comment on a PR and 'Mark as Defect' is already there — no popups, no setup. Leave it unticked and GitHub behaves exactly as normal."
              image={panelCollapsed}
              alt="GitHub PR comment box with the collapsed 'Mark as Defect' checkbox added below the editor"
            />
          </Reveal>
          <Reveal delay={150}>
            <ScreenshotCard
              step="After"
              stepCls="bg-primary text-white"
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
    <figure className="card-hard flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b-2 border-ink bg-muted px-4 py-2">
        <span className={`border-2 border-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest ${stepCls}`}>
          {step}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">fig. {step === "Before" ? "1" : "2"}</span>
      </div>
      <div className="border-b-2 border-line bg-background p-3">
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          unoptimized
          className="mx-auto w-full max-w-[640px] border-2 border-line"
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
      band: "bg-major",
      desc: "Must be fixed before approval.",
      examples: ["Missing", "Risk-prone", "Factually-Incorrect"],
    },
    {
      severity: "Minor",
      band: "bg-minor",
      desc: "Should be fixed, but not a blocker.",
      examples: ["Extra", "Inconsistent", "Ambiguous"],
    },
    {
      severity: "Cosmetic",
      band: "bg-cosmetic",
      desc: "Style and polish level issues.",
      examples: ["Improvement", "Inconsistent", "Extra"],
    },
  ];
  return (
    <section id="labels" className="border-b-2 border-ink">
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
              <div className="card-hard flex h-full flex-col overflow-hidden">
                <div className={`flex items-center justify-between border-b-2 border-ink px-4 py-3 text-white ${g.band}`}>
                  <span className="font-mono text-sm font-bold">#{g.severity}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                    severity
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-medium">{g.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {g.examples.map((e) => (
                      <span
                        key={e}
                        className="border-2 border-line bg-background px-2 py-1 font-mono text-[11px] font-bold text-muted-foreground"
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
          <div className="card-hard mt-10 overflow-hidden">
            <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-paper/80">
                <Github className="h-3.5 w-3.5" />
                comment.body
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
                preview
              </span>
            </div>
            <pre className="overflow-x-auto bg-ink p-6 font-mono text-sm leading-relaxed text-paper">
              {"> "}
              <span className="bg-major px-1.5 py-0.5 font-bold text-white">
                #Major:Missing
              </span>
              {` This endpoint never validates the auth header — request
should reject with 401 before touching the database.

> `}
              <span className="bg-minor px-1.5 py-0.5 font-bold text-white">
                #Minor:Inconsistent
              </span>
              {` We're using camelCase elsewhere in this file.

> `}
              <span className="bg-cosmetic px-1.5 py-0.5 font-bold text-white">
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
    <section id="faq" className="bg-blueprint border-b-2 border-ink">
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
          <div className="card-hard mt-10 divide-y-2 divide-ink overflow-hidden">
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
/* CTA — inverted ink section                                          */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 border-2 border-paper/30 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-paper/70">
            <span className="h-2 w-2 bg-primary" />
            Free · open source · zero permissions
          </div>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Install in under 30 seconds.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-paper/70 md:text-lg">
            Add Defect Marker to Chrome and your next review comment ships with
            a label your whole team can search.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={REPO_URL}
              className="btn-hard inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-bold text-white [--hard:#fff]"
            >
              <ChromeIcon className="h-4 w-4" />
              Add to Chrome — Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={REPO_URL}
              className="btn-hard inline-flex items-center gap-2 border-paper bg-transparent px-7 py-4 text-sm font-bold text-paper [--hard:#fff]"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
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
    <footer className="py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center border-2 border-ink bg-card p-0.5">
            <Image src={extensionIcon} alt="" className="h-full w-full" />
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

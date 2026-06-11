import Image from "next/image";
import panelCollapsed from "@/assets/image01.png";
import panelExpanded from "@/assets/image02.png";
import extensionIcon from "@/assets/icon.png";
import {
  CheckCircle2,
  ShieldCheck,
  Tag,
  Zap,
  Github,
  ArrowRight,
  Sparkles,
  GitPullRequest,
  AlertTriangle,
  Eye,
  ChevronDown,
  Palette,
  Accessibility,
} from "lucide-react";

const VERSION = "v1.0.0";
const REPO_URL = "https://github.com/ammansoomro/github-defect-marker";

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-radial-glow" />

      <Nav />
      <Hero />
      <LogosBar />
      <Features />
      <HowItWorks />
      <ExampleShowcase />
      <LabelShowcase />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#" className="group flex items-center gap-2.5">
          <Image
            src={extensionIcon}
            alt="GitHub Defect Marker icon"
            className="h-8 w-8 rounded-lg shadow-glow transition group-hover:scale-105"
          />
          <span className="text-sm font-semibold tracking-tight">
            GitHub Defect Marker
          </span>
          <span className="ml-1 hidden rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">
            {VERSION}
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">
            Features
          </a>
          <a href="#how" className="transition hover:text-foreground">
            How it works
          </a>
          <a href="#demo" className="transition hover:text-foreground">
            Example
          </a>
          <a href="#labels" className="transition hover:text-foreground">
            Labels
          </a>
          <a href="#faq" className="transition hover:text-foreground">
            FAQ
          </a>
        </div>
        <a
          href="#install"
          className="group hidden items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition hover:opacity-90 sm:inline-flex"
        >
          Add to Chrome
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3 w-3 text-accent" />
          <span>{VERSION} is here — one-click pills, native GitHub theming</span>
        </div>

        <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          Standardize <span className="text-gradient">PR review labels</span> on
          GitHub.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          A lightweight Chrome extension that enforces consistent defect labels
          on every pull request comment — so reviews are searchable, severity is
          obvious, and nothing slips through.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            id="install"
            href={REPO_URL}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
          >
            <Chrome className="h-4 w-4" />
            Install for Chrome
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
          >
            <Eye className="h-4 w-4" />
            See it in action
          </a>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Free • No account required • Zero permissions • Works on github.com
        </p>
      </div>

      {/* Product preview — a mock of the in-page defect panel */}
      <div className="relative mx-auto mt-20 max-w-5xl">
        <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
        <ProductPreview />
        <FloatingPreview />
      </div>
    </section>
  );
}

/**
 * A hand-built mock of a GitHub PR review comment editor with the
 * Defect Marker panel mounted between the textarea and the footer.
 */
function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-elevated backdrop-blur">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-major/70" />
        <span className="h-3 w-3 rounded-full bg-minor/70" />
        <span className="h-3 w-3 rounded-full bg-cosmetic/70" />
        <div className="mx-auto flex items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-1 text-[11px] text-muted-foreground">
          <Github className="h-3 w-3" />
          github.com/acme/api/pull/1432
        </div>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[1fr_380px] md:p-10">
        {/* Diff snippet */}
        <div className="overflow-hidden rounded-xl border border-border bg-background/70 font-mono text-xs leading-6">
          <div className="border-b border-border bg-muted/20 px-4 py-2 text-muted-foreground">
            src/api/auth.ts
          </div>
          <div className="p-4">
            <div className="text-muted-foreground">
              <span className="mr-4 select-none opacity-50">41</span>
              {"export async function handler(req: Request) {"}
            </div>
            <div className="bg-major/10 text-foreground">
              <span className="mr-4 select-none text-major">42 +</span>
              {"  const user = await db.users.find(req.userId);"}
            </div>
            <div className="bg-major/10 text-foreground">
              <span className="mr-4 select-none text-major">43 +</span>
              {"  return ok(user);"}
            </div>
            <div className="text-muted-foreground">
              <span className="mr-4 select-none opacity-50">44</span>
              {"}"}
            </div>
          </div>
        </div>

        {/* Comment editor with the defect panel */}
        <div className="overflow-hidden rounded-xl border border-border bg-background/70">
          <div className="border-b border-border px-4 py-2.5 text-xs font-medium text-muted-foreground">
            Write a review comment
          </div>
          <div className="space-y-3 p-4">
            <div className="rounded-lg border border-border bg-card/60 px-3 py-2.5 font-mono text-xs leading-relaxed">
              <span className="rounded bg-major/15 px-1 py-0.5 font-semibold text-major">
                #Major:Missing
              </span>{" "}
              <span className="text-muted-foreground">
                The auth header is never validated — reject with 401 before
                touching the database.
              </span>
            </div>

            {/* The panel itself */}
            <div className="rounded-lg border border-major/30 bg-major/5 p-3">
              <label className="flex items-center gap-2 text-xs font-medium">
                <span className="flex h-4 w-4 items-center justify-center rounded border border-primary/50 bg-primary/20">
                  <CheckCircle2 className="h-3 w-3 text-primary" />
                </span>
                Mark as Defect
              </label>
              <div className="mt-3 space-y-2.5">
                <PillRow
                  label="Severity"
                  pills={[
                    { text: "Major", tone: "major", active: true },
                    { text: "Minor", tone: "minor" },
                    { text: "Cosmetic", tone: "cosmetic" },
                  ]}
                />
                <PillRow
                  label="Type"
                  pills={[
                    { text: "Missing", tone: "major", active: true },
                    { text: "Extra" },
                    { text: "Risk-prone" },
                    { text: "Ambiguous" },
                  ]}
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5">
                <span className="font-mono text-[11px] font-semibold text-major">
                  #Major:Missing
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 text-primary" /> ready to
                  submit
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
        </div>
      </div>
    </div>
  );
}

function PillRow({
  label,
  pills,
}: {
  label: string;
  pills: { text: string; tone?: "major" | "minor" | "cosmetic"; active?: boolean }[];
}) {
  const toneText: Record<string, string> = {
    major: "text-major border-major/50 bg-major/15",
    minor: "text-minor border-minor/50 bg-minor/15",
    cosmetic: "text-cosmetic border-cosmetic/50 bg-cosmetic/15",
  };
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="w-14 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {pills.map((p) => (
        <span
          key={p.text}
          className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
            p.active && p.tone
              ? toneText[p.tone]
              : "border-border bg-muted/30 text-muted-foreground"
          }`}
        >
          {p.text}
        </span>
      ))}
      <span className="rounded-full border border-border bg-muted/30 px-2 py-1 text-[11px] text-muted-foreground">
        …
      </span>
    </div>
  );
}

function FloatingPreview() {
  return (
    <div className="absolute -bottom-6 left-1/2 hidden w-[min(640px,92%)] -translate-x-1/2 animate-float md:block">
      <div className="glass rounded-2xl p-3 shadow-elevated">
        <div className="rounded-xl bg-background/60 p-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/15 px-2.5 py-1.5 text-xs font-medium text-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Mark as
              Defect
            </span>
            <span className="rounded-md border border-major/40 bg-major/15 px-2.5 py-1.5 text-xs font-semibold text-major">
              Major
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/40 px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
              Missing <ChevronDown className="h-3 w-3" />
            </span>
            <span className="ml-auto font-mono text-[11px] text-muted-foreground">
              #Major:Missing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chrome({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v8M3.5 7l7 4M20.5 7l-7 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LogosBar() {
  return (
    <section className="relative z-10 border-y border-border/60 bg-card/30 py-8 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Built for engineering teams reviewing code on GitHub
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground">
          <Stat label="Chrome permissions" value="Zero" />
          <Divider />
          <Stat label="GitHub UI versions" value="Legacy + New" />
          <Divider />
          <Stat label="Setup time" value="< 30s" />
          <Divider />
          <Stat label="Tracked severities" value="3 tiers" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-base font-semibold text-foreground">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
function Divider() {
  return <div className="hidden h-8 w-px bg-border md:block" />;
}

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
    <section
      id="features"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Features"
        title="Everything reviewers need, nothing they don't."
        sub="Defect Marker stays out of the way until you need it — then it makes labeling a single, deliberate action."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="group bg-card/60 p-7 transition hover:bg-card"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/30">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-muted-foreground md:text-lg">{sub}</p>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Open a pull request",
      body: "Defect Marker activates automatically in any GitHub PR comment editor — legacy UI or the new React-based one.",
    },
    {
      n: "02",
      title: "Mark as defect",
      body: "A compact panel sits between the editor and its footer. Tick the checkbox and the Severity and Type pill groups animate open.",
    },
    {
      n: "03",
      title: "Pick severity & type",
      body: "One click each: Major, Minor, or Cosmetic, then Missing, Extra, Risk-prone, and more. The label is prepended to your comment.",
    },
    {
      n: "04",
      title: "Submit with confidence",
      body: "Submit stays disabled until the label is valid and present. Your team gets searchable, consistent feedback.",
    },
  ];
  return (
    <section
      id="how"
      className="relative z-10 border-t border-border/60 bg-card/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="How it works"
          title="From open PR to labeled defect in seconds."
          sub="Four steps. No configuration. Compatible with every GitHub UI variation we've seen."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="glass relative rounded-xl p-6">
              <div className="font-mono text-xs text-accent">{s.n}</div>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleShowcase() {
  return (
    <section
      id="demo"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Example"
        title="The real thing, inside a real PR."
        sub="Actual screenshots from a GitHub pull request — the panel waits quietly under the comment box, then expands into one-click pills."
      />
      <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
        {/* connecting arrow between the two shots */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-glow">
            <ArrowRight className="h-5 w-5 text-accent" />
          </div>
        </div>

        <ExampleCard
          step="Before"
          title="A quiet checkbox under every comment box"
          body="Open any inline comment on a PR and 'Mark as Defect' is already there — no popups, no setup. Leave it unticked and GitHub behaves exactly as normal."
          image={panelCollapsed}
          alt="GitHub PR comment box with the collapsed 'Mark as Defect' checkbox added below the editor"
        />
        <ExampleCard
          step="After"
          title="Tick it, click two pills, done"
          body="Severity and Defect Type expand as color-coded pills. Picking Minor + Risk-prone prepends #Minor:Risk-prone to the comment and shows it in the live preview chip."
          image={panelExpanded}
          alt="Expanded Defect Marker panel showing severity and defect type pills with the #Minor:Risk-prone label inserted"
          highlight
        />
      </div>
    </section>
  );
}

function ExampleCard({
  step,
  title,
  body,
  image,
  alt,
  highlight = false,
}: {
  step: string;
  title: string;
  body: string;
  image: typeof panelCollapsed;
  alt: string;
  highlight?: boolean;
}) {
  return (
    <figure
      className={`glass flex flex-col overflow-hidden rounded-2xl ${
        highlight ? "ring-1 ring-accent/40" : ""
      }`}
    >
      <div className="border-b border-border/60 bg-background/40 p-2.5">
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          unoptimized
          className="mx-auto w-full max-w-[640px] rounded-xl border border-border/60"
        />
      </div>
      <figcaption className="flex flex-1 flex-col p-6">
        <span
          className={`mb-2 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
            highlight
              ? "border-accent/40 bg-accent/15 text-accent"
              : "border-border bg-muted/40 text-muted-foreground"
          }`}
        >
          {step}
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </figcaption>
    </figure>
  );
}

function LabelShowcase() {
  const groups = [
    {
      severity: "Major",
      tone: "major" as const,
      desc: "Must be fixed before approval.",
      examples: ["Missing", "Risk-prone", "Factually-Incorrect"],
    },
    {
      severity: "Minor",
      tone: "minor" as const,
      desc: "Should be fixed, but not a blocker.",
      examples: ["Extra", "Inconsistent", "Ambiguous"],
    },
    {
      severity: "Cosmetic",
      tone: "cosmetic" as const,
      desc: "Style and polish level issues.",
      examples: ["Improvement", "Inconsistent", "Extra"],
    },
  ];
  return (
    <section
      id="labels"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Labels"
        title="Three severities. Seven types. One source of truth."
        sub="Every defect comment gets a structured #Severity:Type tag — searchable, sortable, and instantly recognizable."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {groups.map((g) => (
          <LabelCard key={g.severity} {...g} />
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background/60">
        <div className="flex items-center justify-between border-b border-border bg-card/60 px-5 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Github className="h-3.5 w-3.5" />
            <span className="font-mono">comment.body</span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            preview
          </span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-foreground">
          {"> "}
          <span className="rounded bg-major/15 px-1.5 py-0.5 text-major">
            #Major:Missing
          </span>
          {` This endpoint never validates the auth header — request
should reject with 401 before touching the database.

> `}
          <span className="rounded bg-minor/15 px-1.5 py-0.5 text-minor">
            #Minor:Inconsistent
          </span>
          {` We're using camelCase elsewhere in this file.

> `}
          <span className="rounded bg-cosmetic/15 px-1.5 py-0.5 text-cosmetic">
            #Cosmetic:Improvement
          </span>
          {` Could be a one-liner with Array.from.`}
        </pre>
      </div>
    </section>
  );
}

function LabelCard({
  severity,
  tone,
  desc,
  examples,
}: {
  severity: string;
  tone: "major" | "minor" | "cosmetic";
  desc: string;
  examples: string[];
}) {
  const toneClasses: Record<typeof tone, string> = {
    major: "border-major/40 text-major bg-major/10",
    minor: "border-minor/40 text-minor bg-minor/10",
    cosmetic: "border-cosmetic/40 text-cosmetic bg-cosmetic/10",
  };
  return (
    <div className="glass flex flex-col rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-md border px-2.5 py-1 font-mono text-xs font-semibold ${toneClasses[tone]}`}
        >
          #{severity}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          severity
        </span>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {examples.map((e) => (
          <span
            key={e}
            className="rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
          >
            :{e}
          </span>
        ))}
      </div>
    </div>
  );
}

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
    <section
      id="faq"
      className="relative z-10 border-t border-border/60 bg-card/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers, before you ask."
          sub="Still curious? Open an issue on the repo and we'll get back to you."
        />
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background/40">
          {items.map((it) => (
            <details key={it.q} className="group p-6 open:bg-card/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium md:text-base">{it.q}</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background p-10 text-center shadow-elevated md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-80" />
        <div className="relative">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Make every PR comment <span className="text-gradient">count</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Install GitHub Defect Marker and bring structure to your code
            reviews today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={REPO_URL}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
            >
              <Chrome className="h-4 w-4" />
              Add to Chrome — Free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={REPO_URL}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src={extensionIcon}
            alt=""
            className="h-6 w-6 rounded-md"
          />
          <span>GitHub Defect Marker • {VERSION}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a href={REPO_URL} className="hover:text-foreground">
            GitHub
          </a>
        </div>
        <span>© {new Date().getFullYear()} GitHub Defect Marker</span>
      </div>
    </footer>
  );
}

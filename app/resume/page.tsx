import Link from "next/link"

export const metadata = {
  title: "Resume - Juyoung Kim",
  description:
    "Resume of Juyoung Kim: product engineer in San Francisco building consumer AI, computer vision systems, and immersive XR.",
}

const SKILLS = [
  { label: "Languages", items: "Swift (Advanced), Python, TypeScript, SQL" },
  { label: "Core Stack", items: "SwiftUI, React, Next.js, Supabase (Postgres), GCP, Modal" },
  {
    label: "AI/ML",
    items: "PyTorch, computer vision (pose estimation, tracking), CatBoost, LLM integration (Claude, Gemini)",
  },
  {
    label: "Specialized",
    items: "App Clips, RealityKit, AR & VR, 3D Gaussian Splatting, Event-Driven Architecture",
  },
]

type Entry = {
  title: string
  subtitle?: string
  when?: string
  href?: string
  bullets: string[]
}

const EXPERIENCE: Entry[] = [
  {
    title: "Second Nature Computing (Poppy) | Founding iOS Engineer",
    subtitle: "San Francisco, CA",
    when: "April 2026 – Present",
    href: "/posts/poppy-second-nature",
    bullets: [
      "Founding engineer on the four-person team behind Poppy, a proactive AI assistant (iOS, macOS, watchOS) that connects calendar, email, messages, and health data and surfaces what matters before users ask. Joined pre-launch; shipped the May 2026 public debut covered by TechCrunch and 9to5Mac. Backed by Kindred Ventures.",
      // TODO(juyoung): replace with the specific surfaces/systems you built (proactive feed,
      // integrations, sync, notifications) plus one metric-backed bullet: launch outcome,
      // retention, crash-free rate, or a hard technical win you own.
      "Own the native SwiftUI app end-to-end.",
    ],
  },
  {
    title: "Wells Fargo | Software Engineer, Backend Infrastructure",
    subtitle: "CA",
    when: "July 2023 – April 2026",
    href: "/posts/wells-fargo-data-engineering",
    bullets: [
      "Designed and ran a high-throughput migration pipeline (NoSQL to SQL) from critical legacy systems to Google Cloud with zero data loss and 100% data integrity validation.",
      "Refactored Python ETL scripts to cut data processing latency by 60% for internal reporting dashboards.",
      "Led monthly production deployments, coordinating code integration across multiple teams and enforcing SDLC standards.",
    ],
  },
  {
    title: "Wells Fargo | Software Engineering Intern",
    subtitle: "NC",
    when: "June 2022 – August 2022",
    bullets: [
      "Won 1st place in the company AI Hackathon with a voice-impersonation detector built on Google Vertex AI and audio spectrogram classification.",
    ],
  },
  {
    title: "Freelance Software Engineer | iOS & Web",
    when: "Project-based",
    bullets: [
      // TODO(juyoung): name 1–2 of the strongest freelance projects with an outcome each.
      "Client work spanning native iOS health-and-fitness apps, AR iOS experiences that augment seashore environments, and websites for construction companies.",
    ],
  },
]

const PROJECTS: Entry[] = [
  {
    title: "TAPE | Solo Builder",
    subtitle: "Fight analytics from broadcast video (Python, PyTorch, Next.js)",
    href: "/posts/tape-mma-fight-intelligence",
    bullets: [
      "Built an end-to-end computer-vision system that turns single-camera MMA broadcast footage into verified fight analytics: identity tracking, pose extraction (YOLO pose + Meta Sapiens on Modal H100s), a physics-feature strike detector tuned to 90–98% recall, and a CatBoost classifier validated with nested leave-one-fight-out cross-validation.",
      "Designed a human-in-the-loop review tool (single-keystroke verdicts, ~7–8/min) and a stats engine that publishes only human-verified events with confidence intervals; a build-time lint gate blocks any UI component from rendering a number that didn't come from the verified data layer.",
      "Shipped a live Next.js/Supabase site with per-fighter reports and scout sheets for 22 fighters (~1,250 hand-logged strikes), plus an LLM analyst (Claude API) that routes questions to a closed registry of verified queries instead of computing answers itself.",
    ],
  },
  {
    title: "SHARP Memories | Creator",
    subtitle: "iOS, Web, visionOS",
    href: "/posts/sharp-memories",
    bullets: [
      "Built a cross-platform 3D capture app (Next.js, Python, Swift) that converts a single 2D photo into a Gaussian Splat, with an event-driven pipeline (Supabase Webhooks) triggering asynchronous serverless GPU inference on Modal. Live on the web and the App Store.",
      "Built an iOS App Clip (< 15MB) so recipients can view shared 3D memories straight from an iMessage link, no install or account required.",
      "Kept hosting costs near zero with a hybrid storage layer (Supabase + Cloudflare R2, zero egress fees) and automated bucket cleanup via pg_cron.",
    ],
  },
  {
    title: "Vantage Sports | Founder & Lead Architect",
    subtitle: "SwiftUI, iOS, visionOS",
    href: "/posts/vantage-vr-sports-platform",
    bullets: [
      "Launched a subscription immersive streaming app on the iOS App Store and Apple Vision Pro with active users and recurring monthly revenue (StoreKit In-App Purchases, Postgres backend). Broadcast partnerships with Fight Night San Jose and Dirty Boxing.",
      "Engineered a low-latency stereoscopic video player (SwiftUI, AVFoundation, RealityKit) and a SharePlay synchronization engine built on Swift 6 concurrency; extracted and open-sourced as the ImmersiveWatchParty SDK.",
    ],
  },
]

const EDUCATION = [
  "B.S. in Computer Science, UNC Chapel Hill (2023)",
  "Google Cloud Professional Cloud Architect | Google Cloud Associate Cloud Engineer",
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:text-slate-400">
      {children}
    </h2>
  )
}

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-[15px] font-semibold leading-snug">
          {entry.href ? (
            <Link href={entry.href} className="hover:underline">
              {entry.title}
            </Link>
          ) : (
            entry.title
          )}
        </h3>
        {entry.when && (
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400">{entry.when}</div>
        )}
      </div>
      {entry.subtitle && (
        <div className="mt-0.5 text-[13px] text-slate-500 dark:text-slate-400">{entry.subtitle}</div>
      )}
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {entry.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="py-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Juyoung Kim</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Software / Product Engineer · San Francisco, CA · U.S. Citizen
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            <a href="mailto:juyoungk23@gmail.com" className="hover:underline">
              juyoungk23@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/juyoungk23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/juyoungkim1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <a
          href="/Juyoung-Kim-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Download PDF
        </a>
      </div>

      <SectionHeading>Skills</SectionHeading>
      <dl className="mt-4 space-y-1.5 text-sm leading-relaxed">
        {SKILLS.map((s) => (
          <div key={s.label} className="flex flex-col sm:flex-row sm:gap-2">
            <dt className="shrink-0 font-semibold sm:w-28">{s.label}</dt>
            <dd className="text-slate-600 dark:text-slate-300">{s.items}</dd>
          </div>
        ))}
      </dl>

      <SectionHeading>Work Experience</SectionHeading>
      {EXPERIENCE.map((e) => (
        <EntryBlock key={e.title} entry={e} />
      ))}

      <SectionHeading>Technical Projects</SectionHeading>
      {PROJECTS.map((p) => (
        <EntryBlock key={p.title} entry={p} />
      ))}

      <SectionHeading>Education &amp; Certificates</SectionHeading>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {EDUCATION.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

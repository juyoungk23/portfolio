// Single source of truth for the resume.
// Consumed by app/resume/page.tsx (website) and resume/generate-tex.mjs (PDF).
// Write plain text here: %, &, <, ~, en dashes are fine: the LaTeX generator escapes them.
// Rebuild the PDF with: pnpm resume:pdf

export const header = {
  name: "Juyoung Kim",
  tagline: "Software / Product Engineer",
  location: "San Francisco, CA",
  citizenship: "U.S. Citizen",
  phone: "(415) 919-2405", // shown on the PDF only, not the website
  email: "juyoungk23@gmail.com",
  website: { label: "juyoungkim.net", url: "https://juyoungkim.net" },
  linkedin: { label: "linkedin.com/in/juyoungkim1", url: "https://www.linkedin.com/in/juyoungkim1/" },
  github: { label: "github.com/juyoungk23", url: "https://github.com/juyoungk23" },
}

export const skills =
  "Swift/SwiftUI, Swift 6 concurrency, Python, TypeScript, SQL · React, Next.js, Supabase (Postgres), GCP · computer vision, LLM integration (Claude, Gemini) · RealityKit, AR/VR, 3D Gaussian Splatting"

/**
 * Experience entry:
 *   role, org, location, when: header fields
 *   href: optional link to the matching blog post (website only)
 *   orgFirst: false: website title reads "role | org" instead of "org | role"
 *   links: optional map of { "phrase in a bullet": "url" }, linkified by both renderers
 */
export const experience = [
  {
    role: "Founding iOS Engineer",
    org: "Second Nature Computing (Poppy)",
    location: "San Francisco, CA",
    when: "April 2026 – Present",
    href: "/posts/poppy-second-nature",
    bullets: [
      "Founding engineer on the four-person team behind Poppy, a proactive AI assistant (iOS, macOS, watchOS) that connects calendar, email, messages, and health data and surfaces what matters before users ask. Joined pre-launch; shipped the May 2026 public debut covered by TechCrunch and 9to5Mac. Backed by Kindred Ventures.",
      "Co-built Pods, Poppy's long-running agentic tasks; own the pods backend day to day and the client that renders agent output (charts, chips, deep links) as native SwiftUI.",
      "Extended Poppy across iOS, watchOS, and macOS with cross-device handoff: a suggestion on iPhone or Watch opens the meeting link on the Mac (WatchConnectivity relay into MultipeerConnectivity, with a durable deduplicating completion queue so offline watch actions never drop).",
      "Built two-way sync between Poppy's reminder system and Apple Reminders via EventKit: silent no-alarm mirrors, deletion propagation, and single-source-of-truth arbitration so exactly one notification ever fires.",
      "Built the health layer reconciling HealthKit and Oura Ring data (per-surface source-of-truth precedence, dedup across Apple Watch and ring) and shipped sleep briefings that explain scores with the life events behind them.",
      "Set up product analytics from zero (Mixpanel, in-depth dashboards, weekly reports) and shipped a new onboarding animation sequence that analytics showed had ~60% end-to-end completion through OTP verification and a paywall; introduced the codebase's first test target (Swift Testing package, ~30 tests, pre-commit hooks).",
    ],
  },
  {
    role: "Software Engineer, Backend Infrastructure",
    org: "Wells Fargo",
    location: "San Francisco, CA",
    when: "July 2023 – April 2026",
    href: "/posts/wells-fargo-data-engineering",
    bullets: [
      "Designed and ran a high-throughput migration pipeline (NoSQL to SQL) from critical legacy systems to Google Cloud with zero data loss, and refactored Python ETL scripts to cut processing latency by 60%.",
      "Led monthly production deployments, coordinating code integration across multiple teams and enforcing SDLC standards.",
      "Previously interned (Summer 2022): won 1st place in the company AI Hackathon with a voice-impersonation detector built on Google Vertex AI and audio spectrogram classification.",
    ],
  },
]

/**
 * Project entry:
 *   name, role: rendered as "name | role" (web) and "name (role)" (PDF)
 *   blurb: optional one-line description; stack: tech list
 *   subtitle becomes "blurb (stack)" on web, "blurb -- stack" on PDF, or just stack if no blurb
 */
export const projects = [
  {
    name: "TAPE",
    role: "Creator",
    blurb: "Fight analytics from broadcast video",
    stack: "Python, PyTorch, Next.js",
    href: "/posts/tape-mma-fight-intelligence",
    bullets: [
      "Built an end-to-end computer-vision system that turns single-camera MMA broadcasts into verified fight analytics: high-recall strike detection with a human-in-the-loop verification workflow, and a live site with per-fighter reports across 22 fighters.",
    ],
  },
  {
    name: "SHARP Memories",
    role: "Creator",
    stack: "iOS, Web, visionOS",
    href: "/posts/sharp-memories",
    bullets: [
      "Built a cross-platform app that converts a single 2D photo into a 3D Gaussian Splat via an event-driven serverless GPU pipeline; an iOS App Clip (< 15MB) lets recipients view shared memories from an iMessage link with no install. Live on the web and the App Store.",
    ],
  },
  {
    name: "Vantage Sports",
    role: "Creator",
    stack: "SwiftUI, iOS, visionOS",
    href: "/posts/vantage-vr-sports-platform",
    bullets: [
      "Launched a subscription immersive streaming app on the iOS App Store and Apple Vision Pro with an engaged user base and broadcast partnerships with Mixed Martial Arts promotions across the United States; extracted the SharePlay synchronization engine into the open-source ImmersiveWatchParty SDK.",
    ],
    links: {
      "ImmersiveWatchParty SDK": "https://github.com/Vantage-Kit/ImmersiveWatchParty-SDK",
    },
  },
]

export const education = {
  degree: { title: "B.S. in Computer Science", org: "UNC Chapel Hill", year: "2023" },
  certs: ["Google Cloud Professional Cloud Architect", "Google Cloud Associate Cloud Engineer"],
}

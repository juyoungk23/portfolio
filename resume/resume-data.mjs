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

export const skills = [
  {
    label: "Apple platforms",
    items:
      "Swift 6 / SwiftUI, RealityKit, visionOS, EventKit, HealthKit, WatchConnectivity, MultipeerConnectivity, SharePlay, App Clips, Swift Testing",
  },
  {
    label: "AI & backend",
    items:
      "LLM integration (Claude, Gemini), computer vision (PyTorch), 3D Gaussian Splatting, Python, GCP, Supabase (Postgres), Next.js",
  },
]

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
      "Third engineer on Poppy, a proactive AI assistant for iOS, macOS, and watchOS; joined pre-launch in April and shipped the May 2026 public debut (TechCrunch, 9to5Mac). Backed by Kindred Ventures.",
      "Co-built Pods, Poppy's long-running agentic tasks that handle goals over days or weeks rather than a single prompt; own the Pods backend and the SwiftUI client that renders agent output as native charts, chips, and deep links.",
      "Built cross-device handoff: a suggestion on iPhone or Watch opens the meeting link on the Mac, via a WatchConnectivity relay into MultipeerConnectivity.",
      "Built two-way sync with Apple Reminders via EventKit, Poppy's backend as source of truth: offline edits and deletions reconcile on re-sync, and delivery-ownership logic guarantees exactly one alarm fires.",
      "Built the health layer merging HealthKit and Oura Ring data (deduplicating overlapping Watch and ring signals) and shipped sleep briefings that explain scores using calendar and message context from the user's actual day.",
      "Own product analytics end to end: built the Mixpanel pipeline from zero, dashboards, and weekly metrics reports; shipped a redesigned onboarding flow that reached ~60% completion through OTP verification and paywall.",
    ],
  },
  {
    role: "Software Engineer, Backend Infrastructure",
    org: "Wells Fargo",
    location: "San Francisco, CA",
    when: "July 2023 – April 2026",
    href: "/posts/wells-fargo-data-engineering",
    bullets: [
      "Backend infrastructure on data migration to Google Cloud. Designed and ran the pipeline moving hundreds of millions of records from legacy on-prem systems to GCP SQL with zero data loss, and refactored the Python ETL layer to cut processing time by 60%.",
      "Led monthly production deployments integrating changes from three teams under bank change-control.",
    ],
  },
]

/**
 * Project entry:
 *   name: product name
 *   blurb: optional one-line description; stack: tech list
 *   subtitle becomes "blurb (stack)" on web, "blurb -- stack" on PDF, or just stack if no blurb
 */
export const projects = [
  {
    name: "SHARP Memories",
    stack: "iOS, Web, visionOS",
    href: "/posts/sharp-memories",
    bullets: [
      "Built a cross-platform app (iOS, web, visionOS) converting a single 2D photo into a 3D Gaussian Splat via an event-driven serverless GPU pipeline; a <15MB iOS App Clip lets recipients view shared memories from an iMessage link with no install. Live on the App Store.",
    ],
  },
  {
    name: "Vantage Sports",
    stack: "SwiftUI, iOS, visionOS",
    href: "/posts/vantage-vr-sports-platform",
    bullets: [
      "Launched a subscription immersive streaming app on iOS and Apple Vision Pro; signed broadcast partnerships with three U.S. MMA promotions.",
      "Built synchronized co-watching with Spatial Personas using custom RealityKit rendering that seats friends' Personas side by side for stereoscopic video and live HLS streams—unsupported by Apple's native player; open-sourced as ImmersiveWatchParty (github.com/juyoungk23/ImmersiveWatchParty-SDK).",
    ],
    links: {
      "github.com/juyoungk23/ImmersiveWatchParty-SDK": "https://github.com/juyoungk23/ImmersiveWatchParty-SDK",
    },
  },
  {
    name: "TAPE",
    blurb: "Fight analytics from broadcast video",
    stack: "Python, PyTorch, Next.js",
    href: "/posts/tape-mma-fight-intelligence",
    bullets: [
      "Built an end-to-end computer-vision system turning single-camera MMA broadcasts into verified fight analytics: strike detection at ~96% recall with human-in-the-loop verification, trained and evaluated on 9,500+ labeled windows across 14 fights; live site with per-fighter reports.",
    ],
  },
]

export const education = {
  degree: { title: "B.S. in Computer Science", org: "UNC Chapel Hill", year: "2023" },
  certs: ["Google Cloud Professional Cloud Architect", "Google Cloud Associate Cloud Engineer"],
}

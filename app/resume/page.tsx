import Link from "next/link"
import { header, skills, experience, projects, education } from "@/resume/resume-data.mjs"

export const metadata = {
  title: "Resume - Juyoung Kim",
  description:
    "Resume of Juyoung Kim: product engineer in San Francisco building consumer AI, computer vision systems, and immersive XR.",
}

type ExperienceEntry = {
  role: string
  org: string
  location: string
  when: string
  href?: string
  orgFirst?: boolean
  bullets: string[]
  links?: Record<string, string>
}

type ProjectEntry = {
  name: string
  role: string
  blurb?: string
  stack: string
  href?: string
  bullets: string[]
  links?: Record<string, string>
}

const EXPERIENCE = experience as ExperienceEntry[]
const PROJECTS = projects as ProjectEntry[]

function linkify(text: string, links?: Record<string, string>) {
  if (!links) return text
  let parts: (string | { phrase: string; url: string })[] = [text]
  for (const [phrase, url] of Object.entries(links)) {
    parts = parts.flatMap((p) =>
      typeof p !== "string" || !p.includes(phrase)
        ? [p]
        : p.split(phrase).flatMap((seg, i) => (i === 0 ? [seg] : [{ phrase, url }, seg])),
    )
  }
  return parts.map((p, i) =>
    typeof p === "string" ? (
      p
    ) : (
      <a
        key={i}
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500 dark:decoration-slate-600"
      >
        {p.phrase}
      </a>
    ),
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:text-slate-400">
      {children}
    </h2>
  )
}

function EntryBlock({
  title,
  subtitle,
  when,
  href,
  bullets,
  links,
}: {
  title: string
  subtitle?: string
  when?: string
  href?: string
  bullets: string[]
  links?: Record<string, string>
}) {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-[15px] font-semibold leading-snug">
          {href ? (
            <Link href={href} className="hover:underline">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        {when && <div className="font-mono text-xs text-slate-500 dark:text-slate-400">{when}</div>}
      </div>
      {subtitle && (
        <div className="mt-0.5 text-[13px] text-slate-500 dark:text-slate-400">{subtitle}</div>
      )}
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>{linkify(b, links)}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ResumePage() {
  const educationLines = [
    `${education.degree.title}, ${education.degree.org} (${education.degree.year})`,
    education.certs.join(" | "),
  ]

  return (
    <div className="py-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{header.name}</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {header.tagline} · {header.location} · {header.citizenship}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            <a href={`mailto:${header.email}`} className="hover:underline">
              {header.email}
            </a>{" "}
            ·{" "}
            <a href={header.github.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>{" "}
            ·{" "}
            <a href={header.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
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
      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{skills}</p>

      <SectionHeading>Work Experience</SectionHeading>
      {EXPERIENCE.map((e) => (
        <EntryBlock
          key={e.role + e.org}
          title={e.orgFirst === false ? `${e.role} | ${e.org}` : `${e.org} | ${e.role}`}
          subtitle={e.location || undefined}
          when={e.when}
          href={e.href}
          bullets={e.bullets}
          links={e.links}
        />
      ))}

      <SectionHeading>Technical Projects</SectionHeading>
      {PROJECTS.map((p) => (
        <EntryBlock
          key={p.name}
          title={`${p.name} | ${p.role}`}
          subtitle={p.blurb ? `${p.blurb} (${p.stack})` : p.stack}
          href={p.href}
          bullets={p.bullets}
          links={p.links}
        />
      ))}

      <SectionHeading>Education &amp; Certificates</SectionHeading>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {educationLines.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

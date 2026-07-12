import { CopyEmail } from "@/components/copy-email"

export const metadata = {
  title: "Contact - Juyoung Kim",
  description: "Get in touch with Juyoung Kim: email, GitHub, LinkedIn.",
}

const EMAIL = "juyoungk23@gmail.com"

const CHANNELS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "The fastest way to reach me.",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/juyoungk23",
    href: "https://github.com/juyoungk23",
    note: "Code, experiments, and what I'm building.",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/juyoungkim1",
    href: "https://www.linkedin.com/in/juyoungkim1/",
    note: "Background, roles, and recommendations.",
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
      <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-400">
        I&apos;m a product engineer in San Francisco. I read everything sent my way and usually
        reply within a day or two. If you&apos;d rather talk, I&apos;d be happy to send a
        calendar invite!
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
            <path d="M3 5.5l7 5.5 7-5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Email me
        </a>
        <CopyEmail email={EMAIL} />
        <span className="font-mono text-sm text-slate-500 dark:text-slate-400">{EMAIL}</span>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {c.label}
              </div>
              <span
                aria-hidden
                className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                →
              </span>
            </div>
            <div className="mt-2 break-all text-[13px] font-semibold leading-snug">{c.value}</div>
            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{c.note}</div>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Good reasons to write
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Roles.</span>{" "}
            I&apos;m interviewing for founding or product engineer positions in San Francisco,
            full stack from the database to the UI.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-100">TAPE.</span>{" "}
            Coaches, analysts, or anyone curious about verified fight analytics: I&apos;m running
            private pilots and would love your eyes on it.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-slate-100">XR and spatial.</span>{" "}
            Vision Pro, Gaussian splats, shared immersive video. If you&apos;re building in this
            space I want to hear about it.
          </li>
        </ul>
      </div>
    </div>
  )
}

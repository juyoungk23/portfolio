// Generates resume/juyoung-kim-resume.tex from resume-data.mjs + template.tex.
// Run via: pnpm resume:pdf  (generate → tectonic → copy into public/)
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { header, skills, experience, projects, education } from "./resume-data.mjs"

const dir = dirname(fileURLToPath(import.meta.url))

// Escape plain text for LaTeX. Replacement callbacks avoid `$<` being parsed
// as a named-group reference in JS replacement strings.
function esc(s) {
  return s
    .replace(/&/g, () => "\\&")
    .replace(/%/g, () => "\\%")
    .replace(/#/g, () => "\\#")
    .replace(/_/g, () => "\\_")
    .replace(/</g, () => "$<$")
    .replace(/>/g, () => "$>$")
    .replace(/~/g, () => "\\textasciitilde ")
    .replace(/—/g, () => "---")
    .replace(/–/g, () => "--")
    .replace(/ · /g, () => " $\\cdot$ ")
}

// Escape text while wrapping any `links` phrases in \href.
function escWithLinks(text, links = {}) {
  let parts = [{ text, url: null }]
  for (const [phrase, url] of Object.entries(links)) {
    parts = parts.flatMap((p) => {
      if (p.url || !p.text.includes(phrase)) return [p]
      return p.text
        .split(phrase)
        .flatMap((seg, i) => (i === 0 ? [{ text: seg, url: null }] : [{ text: phrase, url }, { text: seg, url: null }]))
    })
  }
  return parts
    .filter((p) => p.text.length > 0)
    .map((p) => (p.url ? `\\href{${p.url}}{${esc(p.text)}}` : esc(p.text)))
    .join("")
}

const itemize = (bullets, links) =>
  ["\\begin{itemize}", ...bullets.map((b) => `  \\item ${escWithLinks(b, links)}`), "\\end{itemize}"].join("\n")

const contact = [
  `  ${esc(header.location)} (${esc(header.citizenship)}) $|$ ${esc(header.phone)} $|$ \\href{mailto:${header.email}}{${esc(header.email)}} \\\\`,
  `  \\href{${header.website.url}}{${esc(header.website.label)}} $|$ \\href{${header.linkedin.url}}{${esc(header.linkedin.label)}} $|$ \\href{${header.github.url}}{${esc(header.github.label)}}`,
].join("\n")

const experienceTex = experience
  .map((e) => `\\jobheader{${esc(e.role)}}{${esc(e.when)}}{${esc(e.org)}}{${esc(e.location)}}\n${itemize(e.bullets, e.links)}`)
  .join("\n\n")

const projectsTex = projects
  .map((p) => {
    const sub = p.blurb ? `${p.blurb} – ${p.stack}` : p.stack
    return `\\projectheader{${esc(`${p.name} (${p.role})`)}}{${esc(sub)}}\n${itemize(p.bullets, p.links)}`
  })
  .join("\n\n")

const educationTex = [
  `\\textbf{${esc(education.degree.title)}}, ${esc(education.degree.org)} \\hfill ${esc(education.degree.year)}`,
  "",
  education.certs.map((c) => `\\textbf{${esc(c)}}`).join(" $|$ "),
].join("\n")

const body = [
  `\\name{${esc(header.name)}}`,
  "\\begin{center}",
  contact,
  "\\end{center}",
  "\\vspace{-5pt}",
  "",
  "\\section*{Skills}",
  "",
  esc(skills),
  "",
  "\\section*{Work Experience}",
  "",
  experienceTex,
  "",
  "\\section*{Technical Projects}",
  "",
  projectsTex,
  "",
  "\\section*{Education \\& Certificates}",
  "",
  educationTex,
].join("\n")

const template = readFileSync(join(dir, "template.tex"), "utf8")
const out = template.replace("%%BODY%%", () => body)
writeFileSync(join(dir, "juyoung-kim-resume.tex"), out)
console.log("wrote resume/juyoung-kim-resume.tex")

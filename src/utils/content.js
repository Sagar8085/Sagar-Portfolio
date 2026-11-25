import { Bio, projects, skills } from "../data/constants";

// Small helpers that derive display text from the data file (no new copy).

export const firstName = Bio.name.split(" ")[0];

// Split the bio into sentences: the first is the about summary, the rest the hero summary.
// Split only where punctuation is followed by a space and a capital letter, so "4.5" stays whole.
const sentences = Bio.description
  .replace(/([.!?])\s+(?=[A-Z])/g, "$1\n")
  .split("\n")
  .map((s) => s.trim());
export const aboutSummary = sentences[0];
export const heroSummary = sentences.slice(1).join(" ") || sentences[0];

export const toolCount = skills.reduce((total, group) => total + group.skills.length, 0);

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
export const numberWord = (n) => NUMBER_WORDS[n] || String(n);

export const CATEGORY_LABELS = {
  "web app": "Web app",
  "qa automation": "QA automation",
};

export const pad2 = (n) => String(n).padStart(2, "0");

export const isValidLink = (url) => Boolean(url) && url !== "#";

// Real hostname of a project's live link, else its initials (no invented domains).
export const projectUrlLabel = (project) => {
  if (isValidLink(project.webapp)) {
    try {
      return new URL(project.webapp).hostname.replace(/^www\./, "");
    } catch (e) {
      /* fall through */
    }
  }
  return (project.initials || project.title.slice(0, 3)).toLowerCase();
};

// "LIMS - Laboratory ..." -> "LIMS"; "Encora (Admin, ...)" -> "Encora".
export const shortTitle = (title) => title.split(/ - | \(/)[0].trim();

export const projectById = (id) => projects.find((p) => p.id === id);

// Two-letter badge: the name's capital letters, else its first two letters.
export const toolAbbr = (name) => {
  const capitals = name.match(/[A-Z]/g);
  if (capitals && capitals.length >= 2) return capitals.slice(0, 2).join("");
  const letters = name.replace(/[^A-Za-z0-9]/g, "");
  return letters.charAt(0).toUpperCase() + letters.charAt(1).toLowerCase();
};

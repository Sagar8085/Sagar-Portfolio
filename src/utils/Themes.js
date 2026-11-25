// Design tokens for the "Simple SDE" portfolio design.
export const theme = {
  bg: "#FFFFFF",
  soft: "#F7F7FB",
  surface: "#FFFFFF",
  border: "#ECECF2",
  borderStrong: "#E4E4F0",

  text: "#16161D",
  body: "#3F3F4C",
  muted: "#5E5E6E",
  faint: "#8A8A99", // 3.4:1 on white: lines and dots only, never text

  accent: "#4F46E5",
  accentHover: "#3730A3",
  accentDeep: "#3730A3",
  accentLine: "#A5B4FC",
  amber: "#F59E0B", // decorative only (period, star)
  dark: "#16161D",

  chipBg: "#F4F4F8",
  chipBorder: "#E4E4F0",

  // Pastel sets rotated across cards: tint (fill), soft (lighter fill), ink (text/accent on tint)
  pastels: [
    { name: "indigo", tint: "#EEF0FF", soft: "#F5F6FF", ink: "#4338CA" },
    { name: "amber", tint: "#FFF4E0", soft: "#FFF9EE", ink: "#B45309" },
    { name: "mint", tint: "#E6F7F1", soft: "#F1FBF7", ink: "#047857" },
    { name: "pink", tint: "#FDECF3", soft: "#FEF5F9", ink: "#BE185D" },
  ],

  fontHead: "'Plus Jakarta Sans', system-ui, sans-serif",
  fontBody: "'Plus Jakarta Sans', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",

  radiusCard: "20px",
  radiusButton: "12px",
  radiusChip: "8px",
  maxWidth: "1160px",
  sidePadding: "32px",
};

export const pastel = (index) => theme.pastels[index % theme.pastels.length];

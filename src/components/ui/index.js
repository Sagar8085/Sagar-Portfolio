import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.sidePadding};
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export const Section = styled.section`
  padding: 104px 0;
  background: ${({ theme, $soft }) => ($soft ? theme.soft : "transparent")};
  ${({ $bordered, theme }) =>
    $bordered &&
    css`
      border-top: 1px solid ${theme.border};
      border-bottom: 1px solid ${theme.border};
    `}
  @media (max-width: 640px) {
    padding: 72px 0;
  }
`;

// "// skills" style label above section headings.
export const Label = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 12px;
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 800;
  font-size: clamp(32px, 4.4vw, 46px);
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.text};
`;

export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px 32px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

export const Lead = styled.p`
  max-width: 420px;
  font-size: 16px;
  color: ${({ theme }) => theme.muted};
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radiusChip};
  background: ${({ theme, $tint }) => ($tint ? $tint.tint : theme.chipBg)};
  border: 1px solid ${({ theme, $tint, $outline }) =>
    $outline ? theme.borderStrong : $tint ? "transparent" : theme.chipBorder};
  ${({ $outline }) =>
    $outline &&
    css`
      background: transparent;
    `}
  font-family: ${({ theme, $mono }) => ($mono ? theme.fontMono : theme.fontBody)};
  font-size: ${({ $mono }) => ($mono ? "12px" : "13px")};
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme, $tint }) => ($tint ? $tint.ink : theme.body)};
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 22px;
  border-radius: ${({ theme }) => theme.radiusButton};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease,
    box-shadow 0.2s ease;
  svg {
    transition: transform 0.2s ease;
  }
  &:hover svg.nudge {
    transform: translateX(4px);
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase};
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  border: 1px solid ${({ theme }) => theme.accent};
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.22);
  &:hover {
    background: ${({ theme }) => theme.accentHover};
    border-color: ${({ theme }) => theme.accentHover};
  }
`;

export const OutlineButton = styled.a`
  ${buttonBase};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  &:hover {
    border-color: ${({ theme }) => theme.text};
  }
`;

// Decorative morphing blob; position it with inline style or a wrapper.
export const Blob = styled.span.attrs({ "aria-hidden": "true" })`
  position: absolute;
  display: block;
  pointer-events: none;
  background: ${({ $color }) => $color};
`;

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
  padding: 112px 0;
  @media (max-width: 640px) {
    padding: 72px 0;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  letter-spacing: 0.02em;
  color: ${({ theme, $onDark }) => ($onDark ? theme.darkAccent : theme.accent)};
  margin-bottom: 12px;
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 700;
  font-size: clamp(36px, 5vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: ${({ theme, $onDark }) => ($onDark ? theme.darkText : theme.text)};
`;

export const Lead = styled.p`
  max-width: 400px;
  font-size: 15px;
  color: ${({ theme, $onDark }) => ($onDark ? theme.darkMuted : theme.muted)};
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.radiusChip};
  background: ${({ theme }) => theme.chipBg};
  border: 1px solid ${({ theme }) => theme.chipBorder};
  font-size: 13px;
  line-height: 1.4;
  color: ${({ theme }) => theme.text};
  ${({ $mono, theme }) =>
    $mono &&
    css`
      font-family: ${theme.fontMono};
      font-size: 11.5px;
      color: ${theme.muted};
    `}
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
  padding: 0 20px;
  border-radius: ${({ theme }) => theme.radiusButton};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
`;

export const PrimaryButton = styled.a`
  ${buttonBase};
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  border: 1px solid ${({ theme }) => theme.accent};
  &:hover {
    background: ${({ theme }) => theme.accentHover};
    border-color: ${({ theme }) => theme.accentHover};
  }
`;

export const OutlineButton = styled.a`
  ${buttonBase};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  &:hover {
    border-color: ${({ theme }) => theme.text};
  }
`;

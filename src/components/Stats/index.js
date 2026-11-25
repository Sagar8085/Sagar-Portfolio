import React from "react";
import styled from "styled-components";
import { Bio, projects, skills } from "../../data/constants";
import { Container } from "../ui";

const Card = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusCard};
  overflow: hidden;
  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 6px;
  padding: 28px;
  border-left: 1px solid ${({ theme }) => theme.border};
  &:first-child {
    border-left: none;
  }
  @media (max-width: 760px) {
    padding: 22px;
    &:nth-child(odd) {
      border-left: none;
    }
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.border};
    }
  }
`;

const Value = styled.dd`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 700;
  font-size: clamp(32px, 4vw, 40px);
  line-height: 1;
  color: ${({ theme }) => theme.text};
`;

const Unit = styled.span`
  margin-left: 6px;
  font-size: 0.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.muted};
`;

const Label = styled.dt`
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
`;

const toolCount = skills.reduce((total, group) => total + group.skills.length, 0);

const STATS = [
  { value: Bio.stats.years, unit: "yrs", label: "Professional experience" },
  { value: Bio.stats.domains, label: "Industry domains shipped" },
  { value: projects.length, label: "Featured projects" },
  { value: toolCount, label: "Tools & technologies" },
];

const Stats = () => (
  <Container as="section" aria-label="Highlights">
    <Card>
      {STATS.map((stat) => (
        <Cell key={stat.label}>
          <Label>{stat.label}</Label>
          <Value>
            {stat.value}
            {stat.unit && <Unit>{stat.unit}</Unit>}
          </Value>
        </Cell>
      ))}
    </Card>
  </Container>
);

export default Stats;

import React from "react";
import styled from "styled-components";
import { Bio, projects } from "../../data/constants";
import { aboutSummary, toolCount } from "../../utils/content";
import { pastel } from "../../utils/Themes";
import { Container, Section, Label, Heading } from "../ui";

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Summary = styled.p`
  margin-top: 20px;
  max-width: 540px;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.body};
`;

const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 6px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radiusCard};
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(22, 22, 29, 0.06);
  }
  @media (max-width: 420px) {
    padding: 18px;
  }
`;

const Value = styled.dd`
  font-weight: 800;
  font-size: clamp(32px, 4vw, 42px);
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ $ink }) => $ink};
`;

const StatLabel = styled.dt`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.muted};
`;

const STATS = [
  { value: Bio.stats.years, label: "Years of experience" },
  { value: Bio.stats.domains, label: "Industry domains" },
  { value: projects.length, label: "Featured projects" },
  { value: toolCount, label: "Tools & technologies" },
];

const About = () => (
  <Section id="about" $soft aria-labelledby="about-heading">
    <Grid>
      <div className="reveal">
        <Label>{"// about"}</Label>
        <Heading id="about-heading">Interface, services and test coverage — end to end.</Heading>
        <Summary>{aboutSummary}</Summary>
      </div>
      <Stats>
        {STATS.map((stat, index) => (
          <Stat key={stat.label} className="reveal">
            <StatLabel>{stat.label}</StatLabel>
            <Value $ink={pastel(index).ink}>{stat.value}</Value>
          </Stat>
        ))}
      </Stats>
    </Grid>
  </Section>
);

export default About;

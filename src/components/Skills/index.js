import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Container, Section, SectionHead, Eyebrow, Heading, Lead, Chip, ChipList } from "../ui";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  padding: 24px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusCard};
`;

const CardHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const Count = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.muted};
`;

const Skills = () => (
  <Section id="skills" aria-labelledby="skills-heading">
    <Container>
      <SectionHead>
        <div>
          <Eyebrow>01 / Skills</Eyebrow>
          <Heading id="skills-heading">The toolkit</Heading>
        </div>
        <Lead>
          Here are some of my skills on which I have been working on for the past 4.5 years.
        </Lead>
      </SectionHead>
      <Grid>
        {skills.map((group) => (
          <Card key={group.title}>
            <CardHead>
              <CardTitle>{group.title}</CardTitle>
              <Count aria-label={`${group.skills.length} skills`}>
                {String(group.skills.length).padStart(2, "0")}
              </Count>
            </CardHead>
            <ChipList as="ul" role="list" style={{ listStyle: "none" }}>
              {group.skills.map((item) => (
                <li key={item.name}>
                  <Chip>{item.name}</Chip>
                </li>
              ))}
            </ChipList>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Skills;

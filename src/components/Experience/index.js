import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { Container, Section, SectionHead, Eyebrow, Heading, Lead } from "../ui";
import { ArrowRightIcon } from "../ui/Icons";

const Band = styled(Section)`
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.darkText};
`;

const Roles = styled.ol`
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.darkLine};
`;

const Role = styled.li`
  display: grid;
  grid-template-columns: minmax(200px, 280px) minmax(0, 1fr);
  gap: 40px;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.darkLine};
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 32px 0;
  }
`;

const Dates = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.darkMuted};
`;

const Title = styled.h3`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: ${({ theme }) => theme.darkText};
`;

const Company = styled.p`
  margin-top: 6px;
  font-size: 15px;
  color: ${({ theme }) => theme.darkBody};
`;

const Bullets = styled.ul`
  list-style: none;
  display: grid;
  gap: 14px;
`;

const Bullet = styled.li`
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr);
  gap: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.darkBody};
  svg {
    margin-top: 4px;
    color: ${({ theme }) => theme.darkAccent};
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

const Tag = styled.li`
  padding: 4px 10px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: ${({ theme }) => theme.radiusChip};
  font-size: 12px;
  color: #e6e8ec;
`;

const Experience = () => (
  <Band id="experience" aria-labelledby="experience-heading">
    <Container>
      <SectionHead>
        <div>
          <Eyebrow $onDark>02 / Experience</Eyebrow>
          <Heading id="experience-heading" $onDark>
            Where I&rsquo;ve built
          </Heading>
        </div>
        <Lead $onDark>
          My work experience as a software engineer and working on different companies and
          projects.
        </Lead>
      </SectionHead>
      <Roles>
        {experiences.map((exp) => (
          <Role key={exp.id}>
            <div>
              <Dates>{exp.date}</Dates>
              <Title>{exp.role}</Title>
              <Company>{exp.company}</Company>
            </div>
            <div>
              {exp.desc?.length > 0 && (
                <Bullets>
                  {exp.desc.map((item, index) => (
                    <Bullet key={index}>
                      <ArrowRightIcon size={14} />
                      <span>{item}</span>
                    </Bullet>
                  ))}
                </Bullets>
              )}
              {exp.skills?.length > 0 && (
                <Tags aria-label="Skills used">
                  {exp.skills.map((skill, index) => (
                    <Tag key={index}>{skill.trim()}</Tag>
                  ))}
                </Tags>
              )}
            </div>
          </Role>
        ))}
      </Roles>
    </Container>
  </Band>
);

export default Experience;

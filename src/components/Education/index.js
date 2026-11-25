import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import { Container, Section, SectionHead, Eyebrow, Heading, Lead } from "../ui";

const Card = styled.ol`
  list-style: none;
  padding: 8px 32px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusCard};
  @media (max-width: 640px) {
    padding: 4px 20px;
  }
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 32px;
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  &:first-child {
    border-top: none;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 22px 0;
  }
`;

const Dates = styled.p`
  padding-top: 4px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.muted};
`;

const Degree = styled.h3`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};
`;

const School = styled.p`
  margin-top: 6px;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;

const Note = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.muted};
`;

const Education = () => (
  <Section id="education" aria-labelledby="education-heading" style={{ paddingTop: 0 }}>
    <Container>
      <SectionHead>
        <div>
          <Eyebrow>04 / Education</Eyebrow>
          <Heading id="education-heading">Learning path</Heading>
        </div>
        <Lead>
          My education has been a journey of self-discovery and growth. My educational details
          are as follows.
        </Lead>
      </SectionHead>
      <Card>
        {education.map((item) => (
          <Row key={item.id}>
            <Dates>{item.date}</Dates>
            <div>
              <Degree>{item.degree.trim()}</Degree>
              <School>{item.school}</School>
              {item.grade && <Note>Grade: {item.grade}</Note>}
              {item.desc && <Note>{item.desc}</Note>}
            </div>
          </Row>
        ))}
      </Card>
    </Container>
  </Section>
);

export default Education;

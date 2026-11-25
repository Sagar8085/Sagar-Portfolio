import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import { pastel } from "../../utils/Themes";
import { Container, Section, Label, Heading } from "../ui";
import { GradCapIcon } from "../ui/Icons";

const Head = styled.div`
  margin-bottom: 48px;
`;

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radiusCard};
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(22, 22, 29, 0.07);
  }
`;

const IconTile = styled.span`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({ $tint }) => $tint.tint};
  color: ${({ $tint }) => $tint.ink};
  margin-bottom: 6px;
`;

const Dates = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.muted};
`;

const Degree = styled.h3`
  font-size: 17px;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.text};
`;

const School = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.body};
`;

const Note = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.muted};
`;

const Education = () => (
  <Section id="education" $soft $bordered aria-labelledby="education-heading">
    <Container>
      <Head className="reveal">
        <Label>{"// education"}</Label>
        <Heading id="education-heading">Education</Heading>
      </Head>
      <Grid>
        {education.map((item, index) => (
          <Card key={item.id} className="reveal">
            <IconTile $tint={pastel(index)} aria-hidden="true">
              <GradCapIcon size={22} />
            </IconTile>
            <Dates>{item.date}</Dates>
            <Degree>{item.degree.trim()}</Degree>
            <School>{item.school}</School>
            {item.grade && <Note>Grade: {item.grade}</Note>}
            {item.desc && <Note>{item.desc}</Note>}
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Education;

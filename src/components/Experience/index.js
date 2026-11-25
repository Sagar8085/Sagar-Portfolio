import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { pastel } from "../../utils/Themes";
import { Container, Section, Label, Heading, Chip, ChipList } from "../ui";

const Inner = styled(Container)`
  max-width: calc(860px + 64px);
`;

const Head = styled.div`
  margin-bottom: 48px;
`;

const Timeline = styled.ol`
  position: relative;
  list-style: none;
  display: grid;
  gap: 28px;
  padding-left: 40px;
  &::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.borderStrong};
  }
  @media (max-width: 520px) {
    padding-left: 30px;
    &::before {
      left: 7px;
    }
  }
`;

const Item = styled.li`
  position: relative;
`;

const Dot = styled.span`
  position: absolute;
  left: -34px;
  top: 30px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 0 4px #ffffff;
  @media (max-width: 520px) {
    left: -28px;
  }
`;

const Card = styled.article`
  padding: 28px;
  border-radius: ${({ theme }) => theme.radiusCard};
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 36px rgba(22, 22, 29, 0.07);
  }
  @media (max-width: 520px) {
    padding: 20px;
  }
`;

const CardHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
`;

const Role = styled.h3`
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.text};
`;

const DateBadge = styled.span`
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radiusChip};
  background: ${({ $tint }) => $tint.tint};
  color: ${({ $tint }) => $tint.ink};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 500;
`;

const Company = styled.p`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.muted};
`;

const Bullets = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
  margin-top: 18px;
`;

const Bullet = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.body};
  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 0.68em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $ink }) => $ink};
  }
`;

const Experience = () => (
  <Section id="experience" aria-labelledby="experience-heading">
    <Inner>
      <Head className="reveal">
        <Label>{"// experience"}</Label>
        <Heading id="experience-heading">Where I&rsquo;ve worked</Heading>
      </Head>
      <Timeline>
        {experiences.map((exp, index) => {
          // First role indigo, the rest amber.
          const tint = pastel(index === 0 ? 0 : 1);
          const dotColor = index === 0 ? "#4F46E5" : "#F59E0B";
          return (
            <Item key={exp.id} className="reveal">
              <Dot
                $color={dotColor}
                className={index === 0 ? "ping" : undefined}
                aria-hidden="true"
              />
              <Card>
                <CardHead>
                  <Role>{exp.role}</Role>
                  <DateBadge $tint={tint}>{exp.date}</DateBadge>
                </CardHead>
                <Company>{exp.company}</Company>
                {exp.desc?.length > 0 && (
                  <Bullets>
                    {exp.desc.map((item, i) => (
                      <Bullet key={i} $ink={tint.ink}>
                        {item}
                      </Bullet>
                    ))}
                  </Bullets>
                )}
                {exp.skills?.length > 0 && (
                  <ChipList as="ul" style={{ listStyle: "none", marginTop: 20 }} aria-label="Skills used">
                    {exp.skills.map((skill, i) => (
                      <li key={i}>
                        <Chip $outline>{skill.trim()}</Chip>
                      </li>
                    ))}
                  </ChipList>
                )}
              </Card>
            </Item>
          );
        })}
      </Timeline>
    </Inner>
  </Section>
);

export default Experience;

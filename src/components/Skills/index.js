import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { pastel } from "../../utils/Themes";
import { toolCount, numberWord, toolAbbr, projectById, shortTitle } from "../../utils/content";
import { Container, Section, Label, Heading, SectionHead, Lead, Blob } from "../ui";
import { CheckIcon, ChevronRightIcon } from "../ui/Icons";

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Tabs = styled.div`
  display: grid;
  gap: 8px;
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 12px 14px;
  text-align: left;
  border-radius: 16px;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.borderStrong : "transparent")};
  background: ${({ theme, $active }) => ($active ? theme.surface : "transparent")};
  box-shadow: ${({ $active }) => ($active ? "0 10px 26px rgba(22, 22, 29, 0.07)" : "none")};
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateX(4px);
  }
  > svg {
    margin-left: auto;
    color: ${({ $active, $ink, theme }) => ($active ? $ink : theme.faint)};
    flex: none;
  }
`;

const GlyphTile = styled.span`
  display: grid;
  place-items: center;
  flex: none;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => ($size > 50 ? 16 : 12)}px;
  background: ${({ $tint }) => $tint.tint};
  color: ${({ $tint }) => $tint.ink};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: ${({ $size }) => ($size > 50 ? 20 : 15)}px;
  font-weight: 500;
`;

const TabText = styled.span`
  display: grid;
  line-height: 1.3;
  strong {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.muted};
  }
`;

const Note = styled.p`
  margin-top: 12px;
  padding: 14px 16px;
  border: 1.5px dashed ${({ theme }) => theme.borderStrong};
  border-radius: 14px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  line-height: 1.7;
  color: ${({ theme }) => theme.muted};
  @media (max-width: 860px) {
    grid-column: 1 / -1;
  }
`;

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 440px;
  padding: 28px;
  border-radius: ${({ theme }) => theme.radiusCard};
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 18px 44px rgba(22, 22, 29, 0.05);
  @media (max-width: 640px) {
    padding: 20px;
    min-height: 0;
  }
`;

const PanelHead = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 24px;
  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
`;

const PanelTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
`;

const PanelDesc = styled.p`
  margin-top: 4px;
  max-width: 520px;
  font-size: 15px;
  color: ${({ theme }) => theme.body};
`;

const CountPill = styled.span`
  margin-left: auto;
  flex: none;
  padding: 4px 12px;
  border-radius: 999px;
  background: ${({ $tint }) => $tint.tint};
  color: ${({ $tint }) => $tint.ink};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 500;
  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

const ToolGrid = styled.ul`
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 12px;
`;

const Tool = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    border-color: ${({ $ink }) => $ink};
    box-shadow: 0 10px 22px ${({ $ink }) => `${$ink}22`};
  }
`;

const Abbr = styled.span`
  display: grid;
  place-items: center;
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${({ $tint }) => $tint.tint};
  color: ${({ $tint }) => $tint.ink};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 500;
`;

const SeenIn = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.border};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  color: ${({ theme }) => theme.muted};
`;

const ProjectPill = styled.a`
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
  &:hover {
    border-color: ${({ $ink }) => $ink};
    color: ${({ $ink }) => $ink};
  }
`;

const Glyph = ({ glyph, size }) =>
  glyph === "check" ? <CheckIcon size={size > 50 ? 26 : 18} /> : <span aria-hidden="true">{glyph}</span>;

const NOTE_WORDS = ["frontend", "backend", "testing"];

const Skills = () => {
  const [active, setActive] = useState(0);
  const group = skills[active];
  const tint = pastel(active);
  const seenIn = (group.seenIn || []).map(projectById).filter(Boolean);

  return (
    <Section id="skills" $soft $bordered aria-labelledby="skills-heading">
      <Container>
        <SectionHead className="reveal">
          <div>
            <Label>{"// skills"}</Label>
            <Heading id="skills-heading">What I work with</Heading>
          </div>
          <Lead>
            {toolCount} tools across {numberWord(skills.length)} areas. Pick one to explore.
          </Lead>
        </SectionHead>

        <Layout>
          <Tabs role="group" aria-label="Skill areas">
            {skills.map((g, index) => {
              const t = pastel(index);
              const isActive = index === active;
              return (
                <Tab
                  key={g.title}
                  type="button"
                  $active={isActive}
                  $ink={t.ink}
                  aria-pressed={isActive}
                  aria-controls="skills-panel"
                  onClick={() => setActive(index)}
                >
                  <GlyphTile $size={44} $tint={t} aria-hidden="true">
                    <Glyph glyph={g.glyph} size={44} />
                  </GlyphTile>
                  <TabText>
                    <strong>{g.title}</strong>
                    <span>{g.skills.length} tools</span>
                  </TabText>
                  <ChevronRightIcon size={18} />
                </Tab>
              );
            })}
            <Note>
              {NOTE_WORDS.map((word, index) => (
                <React.Fragment key={word}>
                  {index > 0 && " + "}
                  <span style={{ color: pastel(index).ink }}>{word}</span>
                </React.Fragment>
              ))}{" "}
              = shipped end to end
            </Note>
          </Tabs>

          {/* key re-mounts the panel so the tiles replay their pop-in on every tab change */}
          <Panel id="skills-panel" key={group.title} aria-live="polite">
            <Blob
              className="blob"
              $color={tint.tint}
              style={{ width: 220, height: 220, top: -70, right: -70 }}
            />
            <PanelHead>
              <GlyphTile $size={60} $tint={tint} aria-hidden="true">
                <Glyph glyph={group.glyph} size={60} />
              </GlyphTile>
              <div>
                <PanelTitle>{group.title}</PanelTitle>
                {group.description && <PanelDesc>{group.description}</PanelDesc>}
              </div>
              <CountPill $tint={tint}>{group.skills.length} tools</CountPill>
            </PanelHead>

            <ToolGrid>
              {group.skills.map((item, index) => (
                <Tool key={item.name} className="pop-in" style={{ "--i": index }} $ink={tint.ink}>
                  <Abbr $tint={tint} aria-hidden="true">
                    {toolAbbr(item.name)}
                  </Abbr>
                  {item.name}
                </Tool>
              ))}
            </ToolGrid>

            {seenIn.length > 0 && (
              <SeenIn>
                <span>seen in →</span>
                {seenIn.map((project) => (
                  <ProjectPill key={project.id} href="#projects" $ink={tint.ink}>
                    {shortTitle(project.title)}
                  </ProjectPill>
                ))}
              </SeenIn>
            )}
          </Panel>
        </Layout>
      </Container>
    </Section>
  );
};

export default Skills;

import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import { pastel } from "../../utils/Themes";
import { CATEGORY_LABELS, pad2, projectUrlLabel, isValidLink } from "../../utils/content";
import { Container, Section, Label, Heading, Chip, ChipList } from "../ui";
import BrowserFrame from "../ui/BrowserFrame";
import { ArrowRightIcon, ArrowUpRightIcon } from "../ui/Icons";

const FEATURED_COUNT = 3;

const Head = styled.div`
  margin-bottom: 56px;
`;

/* ---------- Featured zigzag rows ---------- */

const Rows = styled.ol`
  list-style: none;
  display: grid;
  gap: 88px;
  @media (max-width: 860px) {
    gap: 64px;
  }
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  @media (min-width: 861px) {
    > :first-child {
      order: ${({ $flip }) => ($flip ? 2 : 0)};
    }
  }
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const FrameWrap = styled.div`
  position: relative;
  padding: 0 18px 18px 0;
  &::before {
    content: "";
    position: absolute;
    inset: 18px 0 0 18px;
    border-radius: 20px;
    background: ${({ $tint }) => $tint.tint};
  }
  > * {
    position: relative;
  }
  &:hover img {
    transform: scale(1.04);
  }
`;

const Meta = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  font-weight: 500;
  color: ${({ $ink, theme }) => $ink || theme.muted};
`;

const FeaturedTitle = styled.h3`
  margin-top: 10px;
  font-size: clamp(24px, 3vw, 30px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
`;

const Desc = styled.p`
  margin-top: 14px;
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.body};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-top: 24px;
`;

const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0;
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  svg {
    transition: transform 0.2s ease;
  }
  &:hover svg {
    transform: translateX(4px);
  }
`;

const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  svg {
    transition: transform 0.2s ease;
  }
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

/* ---------- More projects ---------- */

const MoreHeading = styled.h3`
  margin: 104px 0 28px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
  @media (max-width: 640px) {
    margin-top: 72px;
  }
`;

const CardGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 20px;
`;

const Card = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  text-align: left;
  border-radius: ${({ theme }) => theme.radiusCard};
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.borderStrong};
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.12);
  }
  &:hover img {
    transform: scale(1.04);
  }
`;

const CardArt = styled.span`
  display: block;
  aspect-ratio: 16 / 9;
  padding: 22px 26px 0;
  overflow: hidden;
  background: ${({ $tint }) => $tint.tint};
  > span {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const CardBody = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 22px;
`;

const CardTitle = styled.span`
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.text};
`;

const CardDesc = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.body};
`;

const CardTags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 10px;
`;

const typeLabel = (project) => CATEGORY_LABELS[project.category] || project.category;

const Projects = ({ setOpenModal }) => {
  const open = (project) => setOpenModal({ state: true, project });
  const featured = projects.slice(0, FEATURED_COUNT);
  const more = projects.slice(FEATURED_COUNT);

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Container>
        <Head className="reveal">
          <Label>{"// projects"}</Label>
          <Heading id="projects-heading">Things I&rsquo;ve built</Heading>
        </Head>

        <Rows>
          {featured.map((project, index) => {
            const tint = pastel(index);
            return (
              <Row key={project.id} $flip={index % 2 === 1} className="reveal">
                <FrameWrap $tint={tint}>
                  <BrowserFrame
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    url={projectUrlLabel(project)}
                    initials={project.initials}
                    tint={tint}
                  />
                </FrameWrap>
                <div>
                  <Meta $ink={tint.ink}>
                    {pad2(index + 1)} · {typeLabel(project)}
                  </Meta>
                  <FeaturedTitle>{project.title}</FeaturedTitle>
                  {project.description && <Desc>{project.description.trim()}</Desc>}
                  {project.tags?.length > 0 && (
                    <ChipList style={{ marginTop: 18 }}>
                      {project.tags.map((tag, i) => (
                        <Chip key={i} $tint={tint} $mono>
                          {tag}
                        </Chip>
                      ))}
                    </ChipList>
                  )}
                  <Links>
                    <TextButton type="button" onClick={() => open(project)} aria-haspopup="dialog">
                      View details
                      <ArrowRightIcon size={16} />
                    </TextButton>
                    {isValidLink(project.webapp) && (
                      <TextLink href={project.webapp} target="_blank" rel="noopener noreferrer">
                        Live site
                        <ArrowUpRightIcon size={15} />
                      </TextLink>
                    )}
                  </Links>
                </div>
              </Row>
            );
          })}
        </Rows>

        {more.length > 0 && (
          <>
            <MoreHeading className="reveal">More projects</MoreHeading>
            <CardGrid>
              {more.map((project, i) => {
                const index = FEATURED_COUNT + i;
                const tint = pastel(index);
                return (
                  <li key={project.id} className="reveal">
                    <Card type="button" onClick={() => open(project)} aria-haspopup="dialog">
                      <CardArt $tint={tint}>
                        <BrowserFrame
                          small
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          initials={project.initials}
                          tint={tint}
                        />
                      </CardArt>
                      <CardBody>
                        <Meta as="span">
                          {pad2(index + 1)} · {typeLabel(project)}
                        </Meta>
                        <CardTitle>{project.title}</CardTitle>
                        {project.description && <CardDesc>{project.description.trim()}</CardDesc>}
                        {project.tags?.length > 0 && (
                          <CardTags>
                            {project.tags.map((tag, t) => (
                              <Chip key={t} $mono>
                                {tag}
                              </Chip>
                            ))}
                          </CardTags>
                        )}
                      </CardBody>
                    </Card>
                  </li>
                );
              })}
            </CardGrid>
          </>
        )}
      </Container>
    </Section>
  );
};

export default Projects;

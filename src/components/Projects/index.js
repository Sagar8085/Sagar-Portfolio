import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { projects } from "../../data/constants";
import { Container, Section, SectionHead, Eyebrow, Heading, Lead, Chip } from "../ui";

export const CATEGORY_LABELS = {
  "web app": "Web app",
  "qa automation": "QA automation",
};

const FILTERS = [
  { value: "all", label: "All" },
  { value: "web app", label: "Web apps" },
  { value: "qa automation", label: "QA automation" },
];

const HeadText = styled.div`
  display: grid;
  gap: 12px;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterButton = styled.button`
  min-height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.dark : theme.border)};
  background: ${({ theme, $active }) => ($active ? theme.dark : theme.surface)};
  color: ${({ theme, $active }) => ($active ? "#ffffff" : theme.text)};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.dark};
  }
`;

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  text-align: left;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radiusCard};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: #c3c8d1;
    box-shadow: 0 10px 28px rgba(14, 17, 22, 0.06);
  }
`;

const Panel = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 168px;
  padding: 18px 20px 20px;
  background: ${({ $bg }) => $bg};
  color: ${({ $fg }) => $fg};
`;

const PanelTop = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
`;

const Initials = styled.span`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 700;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const Body = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  padding: 20px;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 600;
  font-size: 19px;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.muted};
`;

const Tags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 8px;
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.muted};
`;

const Projects = ({ setOpenModal }) => {
  const [filter, setFilter] = useState("all");
  // Number and tint follow each project's position in the full list,
  // so a card keeps its look when the list is filtered.
  const numbered = projects.map((project, index) => ({ project, index }));
  const visible = numbered.filter(
    ({ project }) => filter === "all" || project.category === filter
  );

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Container>
        <SectionHead>
          <HeadText>
            <div>
              <Eyebrow>03 / Projects</Eyebrow>
              <Heading id="projects-heading">Selected work</Heading>
            </div>
            <Lead>
              I have worked on a wide range of projects. Here are some of my projects.
            </Lead>
          </HeadText>
          <Filters role="group" aria-label="Filter projects">
            {FILTERS.map((option) => (
              <FilterButton
                key={option.value}
                type="button"
                $active={filter === option.value}
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </FilterButton>
            ))}
          </Filters>
        </SectionHead>

        {visible.length === 0 ? (
          <Empty>No projects in this category yet.</Empty>
        ) : (
          <Grid>
            {visible.map(({ project, index }) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setOpenModal({ state: true, project })}
              />
            ))}
          </Grid>
        )}
      </Container>
    </Section>
  );
};

const ProjectCard = ({ project, index, onOpen }) => (
  <li>
    <Card type="button" onClick={onOpen} aria-haspopup="dialog">
      <TintedPanel project={project} index={index} />
      <Body>
        <Title>{project.title}</Title>
        {project.description && <Description>{project.description.trim()}</Description>}
        {project.tags?.length > 0 && (
          <Tags>
            {project.tags.map((tag, tagIndex) => (
              <Chip key={tagIndex} $mono>
                {tag}
              </Chip>
            ))}
          </Tags>
        )}
      </Body>
    </Card>
  </li>
);

const TintedPanel = ({ project, index }) => {
  const { tints } = useTheme();
  const [bg, fg] = tints[index % tints.length];
  return (
    <Panel $bg={bg} $fg={fg} aria-hidden="true">
      <PanelTop>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{CATEGORY_LABELS[project.category] || project.category}</span>
      </PanelTop>
      <Initials>{project.initials || project.title.slice(0, 3).toUpperCase()}</Initials>
    </Panel>
  );
};

export default Projects;

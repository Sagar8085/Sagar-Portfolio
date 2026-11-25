import React from "react";
import { Modal } from "@mui/material";
import styled from "styled-components";
import { Chip, ChipList, PrimaryButton, OutlineButton } from "../ui";
import { ArrowRightIcon, ArrowUpRightIcon, CloseIcon } from "../ui/Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 16px;
  overflow-y: auto;
  background: rgba(14, 17, 22, 0.6);
  outline: none;
`;

const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radiusCard};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  @media (max-width: 640px) {
    padding: 18px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  background: ${({ theme }) => theme.surface};
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.text};
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 48px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.border};
  object-fit: cover;
`;

const Title = styled.h2`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 700;
  font-size: clamp(24px, 4vw, 32px);
  line-height: 1.15;
  letter-spacing: -0.01em;
`;

const Label = styled.h3`
  margin-top: 28px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.muted};
`;

const Text = styled.p`
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.muted};
`;

const Bullets = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`;

const Bullet = styled.li`
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr);
  gap: 10px;
  font-size: 15px;
  line-height: 1.6;
  svg {
    margin-top: 4px;
    color: ${({ theme }) => theme.accent};
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

const isValidLink = (url) => Boolean(url) && url !== "#";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const close = () => setOpenModal({ state: false, project: null });
  if (!project) return null;
  const roles = project.roles_and_responsibilities?.filter(Boolean) || [];

  return (
    <Modal open onClose={close} aria-labelledby="project-title">
      <Overlay
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <Dialog>
          <CloseButton type="button" onClick={close} aria-label="Close project details">
            <CloseIcon size={18} />
          </CloseButton>
          {project.image && <Image src={project.image} alt={`${project.title} screenshot`} />}
          <Title id="project-title">{project.title}</Title>
          {project.tags?.length > 0 && (
            <ChipList style={{ marginTop: 14 }}>
              {project.tags.map((tag, index) => (
                <Chip key={index} $mono>
                  {tag}
                </Chip>
              ))}
            </ChipList>
          )}
          {project.description && <Text>{project.description.trim()}</Text>}

          {roles.length > 0 && (
            <>
              <Label>Roles and Responsibilities</Label>
              <Bullets>
                {roles.map((item, index) => (
                  <Bullet key={index}>
                    <ArrowRightIcon size={14} />
                    <span>{item}</span>
                  </Bullet>
                ))}
              </Bullets>
            </>
          )}

          {project.Environment && (
            <>
              <Label>Tech Stack</Label>
              <Text style={{ marginTop: 0 }}>{project.Environment}</Text>
            </>
          )}

          {(isValidLink(project.webapp) || isValidLink(project.github)) && (
            <Actions>
              {isValidLink(project.webapp) && (
                <PrimaryButton href={project.webapp} target="_blank" rel="noopener noreferrer">
                  View Live App
                  <ArrowUpRightIcon size={16} />
                </PrimaryButton>
              )}
              {isValidLink(project.github) && (
                <OutlineButton href={project.github} target="_blank" rel="noopener noreferrer">
                  View Code
                  <ArrowUpRightIcon size={16} />
                </OutlineButton>
              )}
            </Actions>
          )}
        </Dialog>
      </Overlay>
    </Modal>
  );
};

export default ProjectDetails;

import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Container, Eyebrow } from "../ui";
import { ArrowUpRightIcon } from "../ui/Icons";

const Wrapper = styled.section`
  padding: 0 0 112px;
  @media (max-width: 640px) {
    padding-bottom: 72px;
  }
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  gap: 40px;
  align-items: center;
  padding: 56px;
  border-radius: ${({ theme }) => theme.radiusCard};
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 40px 28px;
  }
`;

const Label = styled(Eyebrow)`
  color: rgba(255, 255, 255, 0.88);
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 700;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.02em;
`;

const Text = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.92);
`;

const Actions = styled.div`
  display: grid;
  gap: 12px;
`;

const ActionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.radiusButton};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  &:focus-visible {
    outline-color: #ffffff;
  }
`;

const EmailLink = styled(ActionLink)`
  background: #ffffff;
  color: ${({ theme }) => theme.text};
  border: 1px solid #ffffff;
  &:hover {
    background: #eef2ff;
  }
`;

const GithubLink = styled(ActionLink)`
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Contact = () => (
  <Wrapper id="contact" aria-labelledby="contact-heading">
    <Container>
      <Block>
        <div>
          <Label>05 / Contact</Label>
          <Title id="contact-heading">
            Have a product to ship?
            <br />
            Let&rsquo;s talk.
          </Title>
          <Text>Feel free to reach out to me for any questions or opportunities!</Text>
        </div>
        <Actions>
          <EmailLink href={`mailto:${Bio.email}`}>
            Email me
            <ArrowUpRightIcon size={16} />
          </EmailLink>
          <GithubLink href={Bio.github} target="_blank" rel="noopener noreferrer">
            GitHub profile
            <ArrowUpRightIcon size={16} />
          </GithubLink>
        </Actions>
      </Block>
    </Container>
  </Wrapper>
);

export default Contact;

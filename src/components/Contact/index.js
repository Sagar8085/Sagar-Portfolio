import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Container, Label, PrimaryButton, OutlineButton, Blob } from "../ui";
import { ArrowRightIcon, GithubIcon } from "../ui/Icons";

const Wrapper = styled.section`
  padding: 104px 0;
  @media (max-width: 640px) {
    padding: 72px 0;
  }
`;

const Block = styled.div`
  position: relative;
  overflow: hidden;
  padding: 80px 32px;
  border-radius: 28px;
  background: ${({ theme }) => theme.pastels[0].tint};
  text-align: center;
  @media (max-width: 640px) {
    padding: 56px 22px;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};
`;

const Text = styled.p`
  margin-top: 16px;
  font-size: 17px;
  color: ${({ theme }) => theme.muted};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
`;

const Contact = () => (
  <Wrapper id="contact" aria-labelledby="contact-heading">
    <Container>
      <Block className="reveal">
        <Blob
          className="blob"
          $color="#DDE1FF"
          style={{ width: 300, height: 300, top: -120, left: -100 }}
        />
        <Blob
          className="blob-reverse"
          $color="#FFEBC7"
          style={{ width: 280, height: 280, bottom: -120, right: -90 }}
        />
        <Content>
          <Label>{"// contact"}</Label>
          <Title id="contact-heading">Let&rsquo;s build something together.</Title>
          <Text>Feel free to reach out to me for any questions or opportunities!</Text>
          <Actions>
            <PrimaryButton href={`mailto:${Bio.email}`}>
              Email Me
              <ArrowRightIcon className="nudge" size={16} />
            </PrimaryButton>
            <OutlineButton href={Bio.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} />
              GitHub Profile
            </OutlineButton>
          </Actions>
        </Content>
      </Block>
    </Container>
  </Wrapper>
);

export default Contact;

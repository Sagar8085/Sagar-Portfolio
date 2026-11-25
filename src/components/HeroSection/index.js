import React from "react";
import styled from "styled-components";
import HeroImg from "../../images/HeroImage.jpg";
import { Bio, experiences } from "../../data/constants";
import { Container, PrimaryButton, OutlineButton } from "../ui";
import { ArrowRightIcon } from "../ui/Icons";

const Wrapper = styled.section`
  padding: 72px 0 56px;
  @media (max-width: 640px) {
    padding: 48px 0 40px;
  }
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 64px;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Pill = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #16a34a;
  flex: none;
`;

const Name = styled.h1`
  margin-top: 28px;
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 700;
  font-size: clamp(52px, 9vw, 92px);
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.text};
`;

const Period = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Summary = styled.p`
  margin-top: 28px;
  max-width: 580px;
  font-size: 17px;
  line-height: 1.65;
  color: ${({ theme }) => theme.muted};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  max-width: 420px;
  justify-self: end;
  @media (max-width: 900px) {
    justify-self: start;
    max-width: 360px;
  }
`;

const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radiusCard};
  border: 1px solid ${({ theme }) => theme.border};
  background: #e5e7eb;
`;

const Badge = styled.figcaption`
  position: absolute;
  left: -24px;
  bottom: 32px;
  padding: 14px 18px;
  border-radius: 14px;
  background: ${({ theme }) => theme.dark};
  color: #ffffff;
  box-shadow: 0 12px 32px rgba(14, 17, 22, 0.18);
  @media (max-width: 900px) {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
`;

const BadgeLabel = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 11px;
  color: ${({ theme }) => theme.darkMuted};
`;

const BadgeValue = styled.span`
  display: block;
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 600;
  font-size: 15px;
`;

// "First Last" -> ["First", "Last"]; keeps any middle names on the last line.
const [firstName, ...restName] = Bio.name.split(" ");
const currentCompany = experiences[0]?.company.replace(" - ", ", ");

const HeroSection = () => (
  <Wrapper id="about" aria-labelledby="hero-name">
    <Grid>
      <div>
        <Pill>
          <Dot aria-hidden="true" />
          {Bio.roles[0]}
          {currentCompany && ` · ${currentCompany}`}
        </Pill>
        <Name id="hero-name">
          {firstName}
          <br />
          {restName.join(" ")}
          <Period aria-hidden="true">.</Period>
        </Name>
        <Summary>{Bio.description}</Summary>
        <Actions>
          <PrimaryButton href={Bio.resume} download="Sagar Shrivastava SDE.pdf">
            Check Resume
            <ArrowRightIcon size={16} />
          </PrimaryButton>
          <OutlineButton href="#contact">Get in touch</OutlineButton>
        </Actions>
      </div>
      <Figure>
        <Portrait src={HeroImg} alt={`Portrait of ${Bio.name}`} width="420" height="525" />
        <Badge>
          <BadgeLabel>Stack</BadgeLabel>
          <BadgeValue>{Bio.stack.slice(0, 5).join(" · ")}</BadgeValue>
        </Badge>
      </Figure>
    </Grid>
  </Wrapper>
);

export default HeroSection;

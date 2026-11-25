import React from "react";
import styled from "styled-components";
import HeroImg from "../../images/HeroImage.jpg";
import { Bio } from "../../data/constants";
import { heroSummary } from "../../utils/content";
import { Container, PrimaryButton, OutlineButton, Blob } from "../ui";
import { ArrowRightIcon, GithubIcon, StarIcon } from "../ui/Icons";

const Wrapper = styled.section`
  padding: 72px 0 96px;
  overflow: hidden;
  @media (max-width: 640px) {
    padding: 48px 0 72px;
  }
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Pill = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  background: ${({ theme }) => theme.pastels[0].soft};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.pastels[0].ink};
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  flex: none;
`;

const Title = styled.h1`
  margin-top: 24px;
  font-weight: 800;
  font-size: clamp(44px, 7vw, 72px);
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.text};
`;

const Period = styled.span`
  color: ${({ theme }) => theme.amber};
`;

const TypedLine = styled.p`
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: clamp(16px, 2.2vw, 20px);
  color: ${({ theme }) => theme.accent};
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.muted};
  margin-right: 8px;
`;

const Summary = styled.p`
  margin-top: 20px;
  max-width: 560px;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.body};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

/* ---------- Right column art ---------- */

const Art = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1;
  justify-self: center;
`;

const Photo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 62%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 6px solid #ffffff;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(79, 70, 229, 0.22);
`;

const CodeCard = styled.div`
  position: absolute;
  left: -4%;
  bottom: 10%;
  padding: 14px 16px;
  border-radius: 14px;
  background: ${({ theme }) => theme.dark};
  box-shadow: 0 18px 40px rgba(22, 22, 29, 0.25);
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12.5px;
  line-height: 1.7;
  color: #e5e7eb;
  @media (max-width: 520px) {
    left: 0;
    font-size: 11px;
  }
`;

const Lights = styled.span`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
`;

const Kw = styled.span`
  color: #c4b5fd;
`;
const Str = styled.span`
  color: #fcd34d;
`;
const Punc = styled.span`
  color: #9ca3af;
`;

const ExpBadge = styled.div`
  position: absolute;
  right: -2%;
  top: 12%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 14px 34px rgba(22, 22, 29, 0.1);
  @media (max-width: 520px) {
    right: 0;
  }
`;

const StarTile = styled.span`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${({ theme }) => theme.pastels[1].tint};
  color: ${({ theme }) => theme.amber};
  svg {
    fill: currentColor;
  }
`;

const BadgeText = styled.span`
  display: grid;
  line-height: 1.2;
  strong {
    font-size: 16px;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.muted};
  }
`;

const HeroSection = () => {
  const role = Bio.roles[0];
  return (
    <Wrapper id="top" aria-labelledby="hero-title">
      <Grid>
        <div>
          <Pill className="hero-in" style={{ "--i": 0 }}>
            <Dot className="ping" aria-hidden="true" />
            {Bio.title} · {Bio.stats.years} years
          </Pill>
          <Title id="hero-title" className="hero-in" style={{ "--i": 1 }}>
            Hi, I&rsquo;m {Bio.name}
            <Period aria-hidden="true">.</Period>
          </Title>
          <TypedLine className="hero-in" style={{ "--i": 2 }}>
            <Prompt aria-hidden="true">&gt;</Prompt>
            <span className="typewriter" style={{ "--chars": role.length }}>
              {role}
            </span>
          </TypedLine>
          <Summary className="hero-in" style={{ "--i": 3 }}>
            {heroSummary}
          </Summary>
          <Actions className="hero-in" style={{ "--i": 4 }}>
            <PrimaryButton href={Bio.resume} download="Sagar Shrivastava SDE.pdf">
              Check Resume
              <ArrowRightIcon className="nudge" size={16} />
            </PrimaryButton>
            <OutlineButton href={Bio.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} />
              GitHub
            </OutlineButton>
          </Actions>
        </div>

        <Art className="hero-in" style={{ "--i": 3 }}>
          <Blob
            className="blob"
            $color="#E0E3FF"
            style={{ inset: "6%" }}
          />
          <Blob
            className="blob-reverse"
            $color="transparent"
            style={{ inset: "2%", border: "2px dashed #A5B4FC" }}
          />
          <Photo src={HeroImg} alt={`Portrait of ${Bio.name}`} width="300" height="300" />
          <CodeCard className="float-slow" aria-hidden="true">
            <Lights>
              <span style={{ background: "#FF5F57" }} />
              <span style={{ background: "#FEBC2E" }} />
              <span style={{ background: "#28C840" }} />
            </Lights>
            <Kw>const</Kw> stack <Punc>= [</Punc>
            <br />
            &nbsp;&nbsp;<Str>'React'</Str>
            <Punc>,</Punc> <Str>'Spring'</Str>
            <Punc>,</Punc>
            <br />
            &nbsp;&nbsp;<Str>'Playwright'</Str>
            <br />
            <Punc>];</Punc>
          </CodeCard>
          <ExpBadge className="float">
            <StarTile aria-hidden="true">
              <StarIcon size={16} />
            </StarTile>
            <BadgeText>
              <strong>{Bio.stats.years} yrs</strong>
              <span>experience</span>
            </BadgeText>
          </ExpBadge>
        </Art>
      </Grid>
    </Wrapper>
  );
};

export default HeroSection;

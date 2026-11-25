import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Container } from "../ui";

const FooterBar = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px 32px;
  padding-top: 28px;
  padding-bottom: 28px;
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 20px;
`;

const Social = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  a {
    color: ${({ theme }) => theme.muted};
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const Made = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  code {
    font-family: inherit;
    color: ${({ theme }) => theme.accent};
  }
`;

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: Bio.linkedin },
  { label: "Instagram", href: Bio.insta },
  { label: "Facebook", href: Bio.facebook },
  { label: "Twitter", href: Bio.twitter },
].filter((link) => link.href && link.href !== "#");

const Footer = () => (
  <FooterBar>
    <Inner>
      <Left>
        <p>
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </p>
        {SOCIAL_LINKS.length > 0 && (
          <Social aria-label="Social profiles">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </Social>
        )}
      </Left>
      <Made>
        made with <code>&lt;code/&gt;</code> &amp; coffee
      </Made>
    </Inner>
  </FooterBar>
);

export default Footer;

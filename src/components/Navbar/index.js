import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Container } from "../ui";
import { GithubIcon } from "../ui/Icons";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(244, 245, 247, 0.92);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Bar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 72px;
  @media (max-width: 760px) {
    flex-wrap: wrap;
    gap: 8px 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const Monogram = styled.span`
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.dark};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontHead};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 28px;
  list-style: none;
  @media (max-width: 760px) {
    order: 3;
    width: 100%;
    gap: 4px 20px;
  }
`;

const NavLink = styled.a`
  display: inline-block;
  padding: 6px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.text};
    color: #ffffff;
  }
`;

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const Navbar = () => (
  <Header>
    <Bar as="nav" aria-label="Primary">
      <Brand href="#about">
        <Monogram aria-hidden="true">{initials(Bio.name)}</Monogram>
        {Bio.name}
      </Brand>
      <Links>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </Links>
      <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
        <GithubIcon size={16} />
        GitHub
      </GithubButton>
    </Bar>
  </Header>
);

export default Navbar;

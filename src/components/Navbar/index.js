import React from "react";
import styled from "styled-components";
import { Container } from "../ui";
import { firstName } from "../../utils/content";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Bar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 68px;
  @media (max-width: 760px) {
    flex-wrap: wrap;
    gap: 6px 16px;
    padding-top: 12px;
    padding-bottom: 10px;
  }
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const Logo = styled.span`
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  font-weight: 500;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 28px;
  list-style: none;
  @media (max-width: 760px) {
    order: 3;
    width: 100%;
    gap: 2px 18px;
  }
`;

const NavLink = styled.a`
  position: relative;
  display: inline-block;
  padding: 6px 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.body};
  text-decoration: none;
  transition: color 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.text};
  }
  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.radiusButton};
  background: ${({ theme }) => theme.dark};
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
`;

const Navbar = () => (
  <Header>
    <Bar as="nav" aria-label="Primary">
      <Brand href="#top">
        <Logo aria-hidden="true">&lt;/&gt;</Logo>
        {firstName}
      </Brand>
      <Links>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </Links>
      <ContactButton href="#contact">Contact</ContactButton>
    </Bar>
  </Header>
);

export default Navbar;

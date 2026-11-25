import React, { useState } from "react";
import styled from "styled-components";

const Frame = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: ${({ $small }) => ($small ? "12px" : "16px")};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 18px 40px rgba(22, 22, 29, 0.1);
`;

const Bar = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  height: ${({ $small }) => ($small ? "26px" : "36px")};
  padding: 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.soft};
`;

const Light = styled.span`
  width: ${({ $small }) => ($small ? "7px" : "10px")};
  height: ${({ $small }) => ($small ? "7px" : "10px")};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex: none;
`;

const Url = styled.span`
  margin-left: 10px;
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 11px;
  color: ${({ theme }) => theme.muted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Screen = styled.span`
  display: block;
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: ${({ $tint }) => $tint.tint};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.5s ease;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: ${({ theme }) => theme.fontHead};
  font-weight: 800;
  font-size: ${({ $small }) => ($small ? "28px" : "44px")};
  letter-spacing: -0.02em;
  color: ${({ $tint }) => $tint.ink};
  background: linear-gradient(135deg, ${({ $tint }) => $tint.tint}, ${({ $tint }) => $tint.soft});
`;

const LIGHTS = ["#FF5F57", "#FEBC2E", "#28C840"];

// Browser-window frame around a screenshot. Falls back to a tinted placeholder
// with the project's initials when the image is missing or fails to load.
const BrowserFrame = ({ src, alt, url, initials, tint, small = false, className }) => {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <Frame $small={small} className={className}>
      <Bar $small={small} aria-hidden="true">
        {LIGHTS.map((color) => (
          <Light key={color} $color={color} $small={small} />
        ))}
        {url && !small && <Url>{url}</Url>}
      </Bar>
      <Screen $tint={tint}>
        {showImage ? (
          <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <Placeholder $tint={tint} $small={small} role="img" aria-label={`${alt} (screenshot coming soon)`}>
            {initials}
          </Placeholder>
        )}
      </Screen>
    </Frame>
  );
};

export default BrowserFrame;

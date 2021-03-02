import LetEmKnow from "../../../../images/glitchlit.png";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  align-items: center;
`;

// GlitchLit Emote from Twitch
export const LogoIcon = styled.img.attrs({ src: LetEmKnow })`
  width: 41px;
  height: 41px;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelMain = styled.span`
  font-weight: bold;
  color: #fff;
  font-size: 30px;
`;

export const LabelSlogan = styled.span`
  font-style: italic;
  font-size: 12px;
  color: #000;
`;

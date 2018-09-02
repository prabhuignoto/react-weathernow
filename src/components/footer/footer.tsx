import * as React from "react";
import Github from "./assets/github-brands.svg";
import HeartSVG from "./assets/heart-solid.svg";
import Twitter from "./assets/twitter-brands.svg";
import {
  Copyright,
  Credit,
  Design,
  HeartWrapper,
  Social,
  SocialLink,
  Wrapper
} from "./styles";

export const Footer = () => (
  <Wrapper>
    <Social>
      <SocialLink href="https://github.com/prabhuignoto/react-dark-weather" target="new">
        <Github />
      </SocialLink>
      <SocialLink href="https://twitter.com/prabhumurthy2" target="new">
        <Twitter />
      </SocialLink>
    </Social>
    <Design>
      Designed &amp; Developed with <HeartWrapper>
        <HeartSVG />
      </HeartWrapper>
    </Design>
    <Credit>
      Powered by <a href="https://darksky.net/dev">DarkSky API</a>
    </Credit>
    <Copyright>2018 &copy; Copyrights Reserved</Copyright>
  </Wrapper>
);

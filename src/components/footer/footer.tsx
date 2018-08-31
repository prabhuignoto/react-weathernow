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
      <SocialLink>
        <Github />
      </SocialLink>
      <SocialLink>
        <Twitter />
      </SocialLink>
    </Social>
    <Design>
      Designed &amp; Developed with <HeartWrapper>
        <HeartSVG />
      </HeartWrapper>
    </Design>
    <Credit>
      Powered by <a href="http://newsapi.org">News API</a>
    </Credit>
    <Copyright>2018 &copy; Copyrights Reserved</Copyright>
  </Wrapper>
);

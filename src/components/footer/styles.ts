import Styled from 'styled-components';

export const Wrapper = Styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 10rem;
  align-items: center;
  justify-content: space-evenly;
`;

export const Social = Styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = Styled.a`
  text-decoration: 'underline';
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  display: block;
  padding: 0.25rem;
  margin: 0.25rem 0.5rem;
`;

export const Credit = Styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  color: #C9ADA7;
`;

export const Copyright = Styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  color: #C9ADA7;
`;

export const Design = Styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  color: #C9ADA7;
  position: relative;
  display: flex;
  align-items: center;
`;

export const HeartWrapper = Styled.div`
  position: relative;
  height: 1rem;
  width: 1rem;
  margin: 0 0.25rem;
  padding: 0.25rem;
`;
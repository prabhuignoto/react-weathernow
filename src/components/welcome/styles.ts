import Styled from 'styled-components';

export const Wrapper = Styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  /* margin: 0 auto; */
  width: 98%;
  background: rgb(28,28,49);
  /* background: linear-gradient(90deg, rgba(28,28,49,1) 0%, rgba(201, 173, 167, 0.95) 50%); */
  border-radius: 4px;
`;

export enum Size {
  small,
  medium,
  large
}

export enum Style {
  normal,
  italic
}

export const Text = Styled.span<{size: Size, fontStyle?: Style}>`
  display: block;
  padding: 0.5rem;
  color: #C9ADA7;
  font-style: ${p => p.fontStyle === Style.italic ? 'italic' : 'normal'};
  font-size: ${p => {
    if(p.size === Size.small) {
      return '1rem';
    } else if(p.size === Size.large) {
      return '1.5rem';
    } else if(p.size === Size.medium) {
      return '1rem';
    } else {
      return '1rem';
    }
  }};
`
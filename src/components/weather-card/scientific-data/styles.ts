import Posed from 'react-pose';
import Styled from 'styled-components';

const PosedList= Posed.ul({
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
})

export const Wrapper = Styled.div<{show?: boolean}>`
  display: ${p => p.show ? 'flex' : 'none'};
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  // background: rgba(0,0,0,0.75);
  z-index: 0;
`;

export const List = Styled(PosedList)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: rgba(28,28,49,1);
  padding: 1rem;
  height: 100%;
  top: 0%;
  position: absolute;
  box-shadow: 0 0 5px 1px rgba(255,255,255,0.1);
  border-radius: 3px;
`;

export const ListItem = Styled.li`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(201,173,167,0.2);
`;

export const Cell = Styled.span<{type: string}>`
  display: block;
  width: 50%;
  text-align: ${p => p.type === 'name' ? 'left': 'center'};
  font-size: ${p =>p.type === 'name' ? '0.9rem' : '0.9rem'};
  font-weight: ${p => p.type === 'name' ? '500': ''};
  color: rgba(201,173,167,1);
  white-space: nowrap;
`;

export const CloseButtonWrapper = Styled.div`
  display: block;
  position: absolute;
  top: 0.5rem;
  right: 0.45rem;
  width: 1.5rem;
  height: 1.5rem;
  z-index:10;
`

export const CloseButton = Styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

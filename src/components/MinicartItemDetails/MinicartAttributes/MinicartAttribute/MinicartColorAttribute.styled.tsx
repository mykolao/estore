import styled from 'styled-components';

interface Props {
  isSelected: boolean;
  value: string;
}

export const MinicartColorAttributeStyled = styled.div<Props>`
  border: 1px solid
    ${({ isSelected, theme: { cBlack, cWhite } }) => (isSelected ? cBlack : cWhite)};

  & .colorValue {
    width: 16px;
    height: 16px;

    margin: 1px;
    background-color: ${({ value }) => value};
    opacity: 0.6;
  }
`;

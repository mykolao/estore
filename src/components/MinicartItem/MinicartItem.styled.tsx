import styled from 'styled-components';

export const MinicartItemStyled = styled.div`
  display: flex;
  justify-content: space-between;

  & .rightSection {
    display: flex;
    height: 190px;

    & img {
      margin-left: 8px;
      object-fit: contain;
      height: 100%;
      width: 120px;
    }
  }
`;

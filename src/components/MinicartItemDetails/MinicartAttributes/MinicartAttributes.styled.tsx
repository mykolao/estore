import styled from 'styled-components';

export const MinicartAttributesStyled = styled.div`
  & .attributeSet {
    margin-top: 8px;

    & .label {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }

    & .attributeList {
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }
  }
`;

import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: grid;

  grid-template-columns: auto auto auto auto;
  row-gap: 5px;
  column-gap: 10px;
`;

export const ButtonContainer = styled.button`
  background-color: #bb9950;
  color: #fff;
  border: none;
  font-size: 1rem;

  height: 40px;
  border-radius: 40px;

  &.equal {
    grid-column: span 2;
  }

  &.clear {
    grid-column: span 1 / 5;

    width: 40px;
  }
`;

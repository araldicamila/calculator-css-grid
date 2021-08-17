import styled from "styled-components";

export const CalculatorContainer = styled.div`
  background-color: #fff;

  min-width: 210px;

  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0px 0px 10px rgba(196, 196, 196, 0.4);
`;

export const VisorContainer = styled.div`
  width: 100%;
  text-align: right;

  padding: 2rem 0%;

  small {
    font-size: 0.85rem;
    color: #bb9950;
    font-weight: 600;
  }

  p {
    color: #fedcdc;
    font-size: 2rem;

    margin-top: 0.5rem;
  }
`;

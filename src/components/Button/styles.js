import styled from "styled-components";

const themes = (theme) => {
  switch (theme) {
    case "dark":
      return {
        backgroundColor: "#191B1D",
        color: "#BB9950",
      };
    default:
      return {
        backgroundColor: "#FEDCDC",
        color: "#BB9950",
      };
  }
};

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => themes(theme).backgroundColor};
  color: ${({ theme }) => themes(theme).color};
  font-weight: bold;

  width: 40px;
  height: 40px;

  border-radius: 50px;

  border: none;
`;

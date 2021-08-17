import { ButtonContainer } from "./styles";

export const Button = ({ value, gridArea }) => {
  return <ButtonContainer gridArea={gridArea}>{value}</ButtonContainer>;
};

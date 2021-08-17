import { Keyboard } from "../Keyboard";
import { CalculatorContainer, VisorContainer } from "./styles";

export const Calculator = () => {
  return (
    <CalculatorContainer>
      <VisorContainer>
        <small>10 + 5</small>

        <p>174</p>
      </VisorContainer>
      <Keyboard />
    </CalculatorContainer>
  );
};

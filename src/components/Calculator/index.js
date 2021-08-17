import { Keyboard } from "../Keyboard";
import { CalculatorContainer, VisorContainer } from "./styles";

export const Calculator = () => {
  return (
    <CalculatorContainer>
      <VisorContainer>
        <p>10 + 5</p>

        <p>174</p>
      </VisorContainer>
      <Keyboard />
    </CalculatorContainer>
  );
};

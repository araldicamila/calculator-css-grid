import { Keyboard } from "../Keyboard";
import "./styles.css";

export const Calculator = () => {
  return (
    <div className="calculator">
      <div className="visor">
        <small>10 + 5</small>

        <p>174</p>
      </div>
      <Keyboard />
    </div>
  );
};

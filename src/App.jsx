import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import "./components/Bg.css";
function App() {
  const [calVal, setCalVal] = useState(""); //empty iniital value

  const onButtonCLick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal(""); //setcalval is set to null or zero
    } else if (buttonText == "=") {
      const result = eval(calVal); //eval takes w  hole string as input parameter evluates all mathematical functions in it
      setCalVal(result);
    } // on calculator if c or = are click then evalutaion or a other funcitons runs but anyother key is printed as it it
    else {
      const newDesplayValue = calVal + buttonText;
      setCalVal(newDesplayValue);
    }
  };
  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <div className="heading-top">
            <h1 className="heading-top">BASIC CALCULATOR</h1>
          </div>
          <div className={styles.calculator}>
            <Display displayValue={calVal} />
            <ButtonsContainer onButtonCLick={onButtonCLick} />
          </div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;

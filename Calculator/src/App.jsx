import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  let [calval, setvalue] = useState("");
  
  const onButtonClick = (buttonText) => {
    if(buttonText === '='){
      const result = eval(calval)
      setvalue(result)
    }
    else if(buttonText === 'C') {
      setvalue("")
    }
    else {
      const newDisplayValue = calval + buttonText;
      setvalue(newDisplayValue);
    }
  }



  return(
    <>
      <div className={styles.calculator}>
        <Display displayValue = {calval} />
        <Button onButtonClick = {onButtonClick} />
      </div>
    </>
  );

}

export default App;
import React, { useState } from "react";
import App from "./App";
export const multiStepContext = React.createContext();

const StepContext = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setStep(4);
  }
  return (
    <>
      <multiStepContext.Provider
        value={{
          step,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};
export default StepContext;

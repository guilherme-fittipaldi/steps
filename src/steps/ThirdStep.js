import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { multiStepContext } from "../StepContext";
import { Box, Typography } from "@material-ui/core";

export default function ThirdStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  return (
    <>
      <Typography
        variant="p"
        style={{
          marginBottom: "0.5rem",
          marginTop: "1rem",
          fontWeight: "500",
          width: "100%",
        }}
      >
        Nos conte mais sobre você
      </Typography>
      <TextField
        value={userData.aboutYou}
        onChange={(e) => setUserData({ ...userData, aboutYou: e.target.value })}
        multiline
        rows={10}
        InputProps={{ disableUnderline: true }}
        style={{
          background: "#F0F2F6",
          borderRadius: "4px",
          padding: "10px",
          width: "100%",
          marginBottom: "1rem",
          "&:hover": {},
        }}
      />

      <Box textAlign="right" marginTop="4rem">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#8C98A9",
            color: "#FFF",
            width: "226px",
            height: "54px",
            fontSize: "16px",
            fontStyle: "normal",
            textTransform: "none",
            marginRight: "2rem",
          }}
          onClick={() => setStep(2)}
        >
          Anterior
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#5357B1",
            color: "#FFF",
            width: "226px",
            height: "54px",
            fontSize: "16px",
            fontStyle: "normal",
            textTransform: "none",
          }}
          onClick={submitData}
        >
          Próximo passo
        </Button>
      </Box>
    </>
  );
}

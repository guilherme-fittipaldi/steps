import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Box, Button, Typography } from "@material-ui/core";
export default function DisplayData() {
  const { finalData, setStep } = useContext(multiStepContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="100vh"
      maxWidth="100vw"
      margin="auto"
      flexDirection="column"
      textAlign="center"
    >
      <Typography
        variant="h4"
        style={{
          width: " 347px",
          height: " 54px",
          fontStyle: " normal",
          fontWeight: " 500",
          fontSize: " 36px",
          lineHeight: " 54px",
          letterSpacing: "1",
        }}
      >
        Usuário criado!
      </Typography>
      <Typography
        variant="p"
        style={{
          marginTop: "1rem",
          fontWeight: "500",
          textAlign: "left",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#8C98A9",
        }}
      >
        Nome
      </Typography>

      <Typography
        variant="p"
        style={{
          marginBottom: "0.5rem",
          fontWeight: "400",
          textAlign: "left",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >
        {finalData[0].name}
      </Typography>

      <Typography
        variant="p"
        style={{
          marginTop: "1rem",
          fontWeight: "500",
          textAlign: "left",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#8C98A9",
        }}
      >
        Email
      </Typography>

      <Typography
        variant="p"
        style={{
          marginBottom: "0.5rem",
          fontWeight: "400",
          textAlign: "left",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >
        {finalData[0].email}
      </Typography>
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" marginRight="10rem">
          <Typography
            variant="p"
            style={{
              marginTop: "1rem",
              fontWeight: "500",
              textAlign: "left",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#8C98A9",
            }}
          >
            Rua
          </Typography>

          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              fontWeight: "400",
              textAlign: "left",
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            {finalData[0].street}
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography
            variant="p"
            style={{
              marginTop: "1rem",
              fontWeight: "500",
              textAlign: "left",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#8C98A9",
            }}
          >
            Número
          </Typography>

          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              fontWeight: "400",
              textAlign: "left",
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            {finalData[0].number}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="p"
        style={{
          marginTop: "1rem",
          fontWeight: "500",
          textAlign: "left",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#8C98A9",
        }}
      >
        CEP
      </Typography>

      <Typography
        variant="p"
        style={{
          marginBottom: "5rem",
          fontWeight: "400",
          textAlign: "left",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >
        {finalData[0].cep}
      </Typography>

      <Button
        variant="contained"
        style={{
          backgroundColor: "#5357B1",
          color: "#FFF",
          height: "54px",
          fontSize: "16px",
          fontStyle: "normal",
          width: "100%",
          textTransform: "none",
        }}
        onClick={() => {
          setStep(1);
          finalData.pop();
        }}
      >
        Novo usuário
      </Button>
    </Box>
  );
}

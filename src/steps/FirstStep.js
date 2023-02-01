import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { multiStepContext } from "../StepContext";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <>
      <Typography
        variant="p"
        style={{ marginBottom: "0.5rem", marginTop: "1rem", fontWeight: "500" }}
      >
        Nome
      </Typography>

      <TextField
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        InputProps={{ disableUnderline: true }}
        style={{
          background: "#F0F2F6",
          borderRadius: "4px",
          padding: "10px",
          height: "24px",
          marginBottom: "1rem",
          "&:hover": {},
          border:
            userData.name && userData.name.length < 3 ? "1px solid red" : "",
        }}
        helperText={
          userData.name &&
          userData.name.length < 3 &&
          "Nome deve conter pelo menos 3 caracteres"
        }
      />

      <Box display="flex">
        <Box
          disply="flex"
          flexDirection="column"
          width="45%"
          style={{ marginRight: "8%" }}
        >
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
              width: "100%",
            }}
          >
            Senha
          </Typography>
          <TextField
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            InputProps={{ disableUnderline: true }}
            style={{
              background: "#F0F2F6",
              borderRadius: "4px",
              padding: "10px",
              height: "24px",
              width: "100%",
              marginBottom: "1rem",
              "&:hover": {},
              border:
                userData.password && userData.password.length < 8
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.password &&
              userData.password.length < 8 &&
              "Senha deve conter pelo menos 8 dígitos"
            }
            type="password"
          />
        </Box>

        <Box disply="flex" flexDirection="column" width="45%">
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Confirmar Senha
          </Typography>
          <TextField
            value={userData.passwordConfirmation}
            onChange={(e) =>
              setUserData({ ...userData, passwordConfirmation: e.target.value })
            }
            InputProps={{ disableUnderline: true }}
            style={{
              background: "#F0F2F6",
              borderRadius: "4px",
              padding: "10px",
              height: "24px",
              marginBottom: "1rem",
              width: "100%",
              "&:hover": {},
              border:
                userData.password !== userData.passwordConfirmation
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.password !== userData.passwordConfirmation &&
              "A confirmação de senha não confere"
            }
            type="password"
          />
        </Box>
      </Box>

      <Box display="flex">
        <Box
          disply="flex"
          flexDirection="column"
          width="45%"
          style={{ marginRight: "8%" }}
        >
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
              width: "100%",
            }}
          >
            Email
          </Typography>
          <TextField
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            InputProps={{ disableUnderline: true }}
            style={{
              background: "#F0F2F6",
              borderRadius: "4px",
              padding: "10px",
              height: "24px",
              width: "100%",
              marginBottom: "1rem",
              "&:hover": {},
              border:
                userData.email &&
                !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                  userData.email
                )
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.email &&
              !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                userData.email
              ) &&
              "Email inválido"
            }
            type="email"
          />
        </Box>
        <Box disply="flex" flexDirection="column" width="45%">
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Data de Nascimento
          </Typography>
          <TextField
            value={userData.birthdate}
            onChange={(e) =>
              setUserData({ ...userData, birthdate: e.target.value })
            }
            InputProps={{ disableUnderline: true }}
            style={{
              background: "#F0F2F6",
              borderRadius: "4px",
              padding: "10px",
              height: "24px",
              marginBottom: "1rem",
              width: "100%",
              "&:hover": {},
              border:
                userData.birthdate &&
                new Date(userData.birthdate).toString() === "Invalid Date"
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.birthdate &&
              new Date(userData.birthdate).toString() === "Invalid Date" &&
              "Data inválida"
            }
          />
        </Box>
      </Box>

      <Box textAlign="right" marginTop="4rem">
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
          onClick={() => setStep(2)}
        >
          Próximo passo
        </Button>
      </Box>
    </>
  );
}

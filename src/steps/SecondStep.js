import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { multiStepContext } from "../StepContext";
import { Box, Typography } from "@material-ui/core";

export default function SecondStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <>
      <Box display="flex">
        <Box
          display="flex"
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
            CEP
          </Typography>
          <TextField
            value={userData.cep}
            onChange={(e) => setUserData({ ...userData, cep: e.target.value })}
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
                userData.cep && !/^[0-9]{5}-[0-9]{3}$/.test(userData.cep)
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.cep &&
              !/^[0-9]{5}-[0-9]{3}$/.test(userData.cep) &&
              "CEP inválido"
            }
          />
        </Box>

        <Box display="flex" flexDirection="column" width="45%">
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Rua
          </Typography>
          <TextField
            value={userData.street}
            onChange={(e) =>
              setUserData({ ...userData, street: e.target.value })
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
                userData.street && userData.street.length < 3
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.street &&
              userData.street.length < 3 &&
              "A rua deve conter pelo menos 3 caracteres"
            }
          />
        </Box>
      </Box>
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          width="23%"
          style={{ marginRight: "2%" }}
        >
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Número
          </Typography>
          <TextField
            value={userData.number}
            onChange={(e) =>
              setUserData({ ...userData, number: e.target.value })
            }
            InputProps={{ disableUnderline: true }}
            style={{
              background: "#F0F2F6",
              borderRadius: "4px",
              padding: "10px",
              height: "24px",
              marginBottom: "1rem",
              "&:hover": {},
              border:
                userData.number && isNaN(userData.number)
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.number && isNaN(userData.number) && "Número inválido"
            }
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          width="23%"
          style={{ marginRight: "5%" }}
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
            Bairro
          </Typography>
          <TextField
            value={userData.neighborhood}
            onChange={(e) =>
              setUserData({ ...userData, neighborhood: e.target.value })
            }
            InputProps={{ disableUnderline: true }}
            style={{
              background: "#F0F2F6",
              borderRadius: "4px",
              padding: "10px",
              height: "24px",
              marginBottom: "1rem",
              "&:hover": {},
              border:
                userData.neighborhood && userData.neighborhood.length < 3
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.neighborhood &&
              userData.neighborhood.length < 3 &&
              "Bairro deve conter pelo menos 3 caracteres"
            }
          />
        </Box>

        <Box display="flex" flexDirection="column" width="45%">
          <Typography
            variant="p"
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Cidade
          </Typography>
          <TextField
            value={userData.city}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
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
                userData.city && userData.city.length < 3
                  ? "1px solid red"
                  : "",
            }}
            helperText={
              userData.city &&
              userData.city.length < 3 &&
              "A cidade deve conter pelo menos 3 caracteres"
            }
          />
        </Box>
      </Box>
      <Typography
        variant="p"
        style={{
          marginBottom: "0.5rem",
          marginTop: "1rem",
          fontWeight: "500",
          width: "100%",
        }}
      >
        Ponto de Referência
      </Typography>
      <TextField
        value={userData.referencePoint}
        onChange={(e) =>
          setUserData({ ...userData, referencePoint: e.target.value })
        }
        InputProps={{ disableUnderline: true }}
        style={{
          background: "#F0F2F6",
          borderRadius: "4px",
          padding: "10px",
          height: "24px",
          marginBottom: "1rem",
          "&:hover": {},
          border:
            userData.referencePoint && userData.referencePoint.length < 3
              ? "1px solid red"
              : "",
        }}
        helperText={
          userData.referencePoint &&
          userData.referencePoint.length < 3 &&
          "O ponto de referência deve conter pelo menos 3 caracteres"
        }
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
          onClick={() => setStep(1)}
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
          onClick={() => setStep(3)}
        >
          Próximo passo
        </Button>
      </Box>
    </>
  );
}

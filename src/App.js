import Stepper from "@material-ui/core/Stepper";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import { multiStepContext } from "./StepContext";
import DisplayData from "./steps/DisplayData";
import { useContext } from "react";
import { Avatar, Box, Step, StepLabel, Typography } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function App() {
  const { step } = useContext(multiStepContext);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <DisplayData />;
      default:
        return <FirstStep />;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="70vh"
      maxWidth="60vw"
      margin="auto"
      flexDirection="column"
    >
      {step !== 4 && (
        <>
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
            Criação de usuário
          </Typography>
          <Stepper activeStep={step + 1} orientation="horizontal">
            <Step>
              <StepLabel
                StepIconComponent={() => (
                  <Avatar style={{ backgroundColor: "#F0F2F6" }}>
                    <BadgeIcon
                      sx={{ color: step === 1 ? "#5357B1" : "#00AE63" }}
                    />
                  </Avatar>
                )}
              >
                Identificação do Usuário
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconComponent={() => (
                  <Avatar style={{ backgroundColor: "#F0F2F6" }}>
                    <HomeIcon
                      sx={{
                        color:
                          step === 2
                            ? "#5357B1"
                            : step < 2
                            ? "#8C98A9"
                            : "#00AE63",
                      }}
                    />
                  </Avatar>
                )}
              >
                Endereço do usuário
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconComponent={() => (
                  <Avatar style={{ backgroundColor: "#F0F2F6" }}>
                    <TextSnippetIcon
                      sx={{
                        color:
                          step === 3
                            ? "#5357B1"
                            : step < 3
                            ? "#8C98A9"
                            : "#00AE63",
                      }}
                    />
                  </Avatar>
                )}
              >
                Sobre você
              </StepLabel>
            </Step>
          </Stepper>
        </>
      )}
      {showStep(step)}
    </Box>
  );
}

export default App;

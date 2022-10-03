import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Wind_model from "../model/Model";
import { ai_results_intf } from "../model/interface";
import Grid from "@mui/material/Grid";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import BoltIcon from "@mui/icons-material/Bolt";
import BuildIcon from "@mui/icons-material/Build";
import ShuffleIcon from "@mui/icons-material/Shuffle";

interface PredResult {
  Wind_ref: Wind_model;
  predData: ai_results_intf;
}

const PredResults: React.FC<PredResult> = (props) => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#111111", color: "#fff" }}>
        <Typography variant="h4" gutterBottom>
          AI Detetction
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Box sx={{ padding: "20px", textAlign: "left" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px", fontSize: "1.5rem" }}
                    >
                      <CrisisAlertIcon color="primary"></CrisisAlertIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        Target Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      0.0
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px" }}
                    >
                      <AcUnitIcon color="primary"></AcUnitIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        No Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      {props.predData.no_failure}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px" }}
                    >
                      <LocalFireDepartmentIcon color="primary"></LocalFireDepartmentIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        Heat Dissipation Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      0.0
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px" }}
                    >
                      <MicrowaveIcon color="primary"></MicrowaveIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        Overstrain Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      0.0
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px" }}
                    >
                      <BoltIcon color="primary"></BoltIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        Power Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      0.0
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px" }}
                    >
                      <BuildIcon color="primary"></BuildIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        Tool Wear Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      0.0
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ minWidth: "250px" }}
                    >
                      <ShuffleIcon color="primary"></ShuffleIcon>
                      <Typography variant="subtitle2" gutterBottom>
                        Random Failure
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      0.0
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  {/* <Typography variant="subtitle2" gutterBottom>
                    0.0
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    1.0
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    0.0
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    0.0
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    0.0
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    0.0
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    0.0
                  </Typography> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default PredResults;

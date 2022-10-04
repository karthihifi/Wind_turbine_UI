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
import "../App.css";

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
      <Box sx={{ width: "100%" }} className="test">
        <Stack spacing={2}>
          <Box sx={{ padding: "20px", textAlign: "left" }}>
            <Box className="test1">
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <CrisisAlertIcon
                    color="primary"
                    fontSize="large"
                  ></CrisisAlertIcon>
                  <Typography
                    sx={{ fontSize: "2.5ch" }}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Target Failure
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ fontSize: "2.5ch" }}
                >
                  {props.predData.target_fail}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <AcUnitIcon color="primary" fontSize="large"></AcUnitIcon>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                    No Failure
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                  {props.predData.no_failure}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <LocalFireDepartmentIcon color="primary" fontSize="large"></LocalFireDepartmentIcon>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                    Heat Dissipation Failure
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                  {props.predData.heat_diss_fail}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <MicrowaveIcon color="primary" fontSize="large"></MicrowaveIcon>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                    Overstrain Failure
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                  {props.predData.overstrain_fail}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <BoltIcon color="primary" fontSize="large"></BoltIcon>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                    Power Failure
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                  {props.predData.power_fail}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <BuildIcon color="primary" fontSize="large"></BuildIcon>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                    Tool Wear Failure
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                  {props.predData.tool_wear_fail}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={2} sx={{ minWidth: "300px" }}>
                  <ShuffleIcon color="primary" fontSize="large"></ShuffleIcon>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                    Random Failure
                  </Typography>
                </Stack>
                <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "2.5ch" }}>
                  {props.predData.rand_fail}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default PredResults;

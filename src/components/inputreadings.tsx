import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Wind_model from "../model/Model";
import { Wind_reading_intf, ai_results_intf } from "../model/interface";
import axios from "axios";

interface Inputreadings {
  Wind_ref: Wind_model;
  setpredData: (predData: ai_results_intf) => void;
  setLoading: (load: boolean) => void;
}

const InputReadings: React.FC<Inputreadings> = (props) => {
  const [expData, setexpData] = React.useState<Wind_reading_intf>(
    props.Wind_ref.turbine_readings
  );

  const handleChange =
    (prop: keyof Wind_reading_intf) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let Winddata: Wind_reading_intf = {
        ...expData,
        [prop]: parseFloat(event.target.value),
      };
      console.log(Winddata);
      setexpData(Winddata);
      props.Wind_ref.SetWind_turbine_readings(Winddata);
    };

  return (
    <div>
      <Box sx={{ backgroundColor: "#111111", color: "#fff" }}>
        <Typography variant="h4" gutterBottom>
          Wind Turbine Reading
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          padding: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="row">
          <TextField
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("air_temp")}
            required
            id="outlined-required"
            label="Air Temperature"
            helperText="In kelvin"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">k</InputAdornment>
            //   ),
            // }}
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />
          <TextField
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("process_temp")}
            required
            id="outlined-required"
            label="Process Temperature"
            helperText="In kelvin"
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />
        </Stack>

        <Stack spacing={2} direction="row">
          <TextField
            // InputProps={{ style: { fontSize: 40 } }}
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("rotat_speed")}
            required
            id="outlined-required"
            label="Rotational Speed"
            helperText="Enter Rotational Speed"
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />
          <TextField
            required
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("torque")}
            id="outlined-required"
            label="Torque"
            variant="standard"
            helperText="In Nm"
            type="number"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />

          <TextField
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("tool_wear")}
            required
            id="outlined-required"
            variant="standard"
            label="Total Wear"
            helperText="In min"
            type="number"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("h")}
            required
            id="outlined-required"
            label="H"
            helperText="Enter H"
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />

          <TextField
            required
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("l")}
            id="outlined-required"
            variant="standard"
            label="L"
            helperText="Enter L"
            type="number"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />

          <TextField
            required
            size="small"
            sx={{ maxWidth: 150 }}
            onChange={handleChange("m")}
            id="outlined-required"
            variant="standard"
            label="M"
            helperText="Enter M"
            type="number"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 20 },
            }}
          />
        </Stack>
      </Box>
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          props.setLoading(true);
          let pred_data: ai_results_intf = {
            target_fail: 0,
            no_failure: 0,
            heat_diss_fail: 0,
            overstrain_fail: 0,
            power_fail: 0,
            tool_wear_fail: 0,
            rand_fail: 0,
          };
          const data = {
            "Air temperature [K]": props.Wind_ref.turbine_readings.air_temp,
            "Process temperature [K]":
              props.Wind_ref.turbine_readings.process_temp,
            "Rotational speed [rpm]":
              props.Wind_ref.turbine_readings.rotat_speed,
            "Torque [Nm]": props.Wind_ref.turbine_readings.torque,
            "Tool wear [min]": props.Wind_ref.turbine_readings.tool_wear,
            H: props.Wind_ref.turbine_readings.h,
            L: props.Wind_ref.turbine_readings.l,
            M: props.Wind_ref.turbine_readings.m,
          };

          const auth = {
            username: "default\\lieuyongtan",
            password: "75488547As!",
          };
          const baseURL =
            "https://http-cors-proxy.p.rapidapi.com/https://vsystem.ingress.dh-t4ss62ru9808.di-xmj.shoot.live.k8s-hana.ondemand.com/app/pipeline-modeler/openapi/service/04e4a20d-92c6-4780-a01a-0cf096a9aaee/v1/uploadjson/";

          const options = {
            method: "POST",
            url: baseURL,
            headers: {
              "content-type": "application/json",
              "x-requested-with": "XMLHttpRequest",
              "X-RapidAPI-Key":
                "bc41357440msh081d6136a942088p184a7fjsn73ea4a87195d",
              "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
            },
            auth: auth,
            data: data,
          };

          axios
            .request(options)
            .then(function (response) {
              // console.log(response.data);
              pred_data.heat_diss_fail =
                response.data["Heat Dissipation Failure"];
              pred_data.no_failure = response.data["No_Failure"];
              pred_data.target_fail = response.data["Target_Failure"];
              pred_data.overstrain_fail = response.data["Overstrain_Failure"];
              pred_data.power_fail = response.data["Power_Failure"];
              pred_data.tool_wear_fail = response.data["Tool_Wear_Failure"];
              pred_data.rand_fail = response.data["Random_Failures"];
              console.log(pred_data, "PredData");
              props.setpredData(pred_data);
              props.setLoading(false);
            })
            .catch(function (error) {
              console.error(error);
              props.setLoading(false);
            });
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default InputReadings;

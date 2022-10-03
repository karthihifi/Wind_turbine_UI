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

interface Inputreadings {
  Wind_ref: Wind_model;
  setpredData: (predData: ai_results_intf) => void;
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
        [prop]: event.target.value,
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">k</InputAdornment>
              ),
            }}
            type="number"
            variant="standard"
            InputLabelProps={{
              shrink: true,
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
            }}
          />
        </Stack>

        <Stack spacing={2} direction="row">
          <TextField
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
            }}
          />
        </Stack>
      </Box>
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          //   console.log(props.Wind_ref.GetAI_Failure_readings(),"adada");
        //   props.setpredData(props.Wind_ref.GetAI_Failure_readings());
        props.Wind_ref.GetAI_Failure_readings()
          console.log( "Later");
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default InputReadings;

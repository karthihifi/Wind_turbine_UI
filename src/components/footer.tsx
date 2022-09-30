import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Wind_model from "../model/Model";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Footer() {
  let Wind_ref = new Wind_model();
  return (
    <div className="footer">
      <Grid container sx={{ backgroundColor: "#111111" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              color: "#e7214d !important",
            }}
          >
            <Typography variant="h1">ECO</Typography>
            <Typography variant="h1">ENERGY</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "20px",
          }}
        >
          <Box sx={{ color: "#ffffff !important" }}>
            <Typography variant="body1">
              <blockquote>
                As yet, the wind is an untamed, and unharnessed force; and quite
                possibly one of the greatest discoveries hereafter to be made,
                will be the taming, and harnessing of the wind.
              </blockquote>
              <cite>- Abraham Lincon</cite>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

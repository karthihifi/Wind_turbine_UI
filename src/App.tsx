import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Carousel_img from "./components/carousel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputReadings from "./components/inputreadings";
import PredResults from "./components/predresults";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Wind_model from "./model/Model";
import Paper from "@mui/material/Paper";
import Footer from './components/footer'

function App() {
  let Wind_ref = new Wind_model();
  return (
    <div className="App">
      <div className="App_carousel">
        <Carousel_img></Carousel_img>
      </div>
      <Container maxWidth="xl" className="App_Container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ minHeight: "400px", width: "100%" }}>
              <InputReadings Wind_ref={Wind_ref}></InputReadings>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ minHeight: "400px", width: "100%" }}>
              <PredResults Wind_ref={Wind_ref}></PredResults>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;

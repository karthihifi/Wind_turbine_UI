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
import { ai_results_intf } from "./model/interface";
import Paper from "@mui/material/Paper";
import Footer from "./components/footer";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  let Wind_ref = new Wind_model();

  const [loadingInProgress, setLoading] = React.useState(false);
  const [predData, setpredData] = React.useState<ai_results_intf>(
    Wind_ref.pred_results
  );

  return (
    <div className="App">
      {loadingInProgress ? (
        <div className="loader-container">
          <BeatLoader color="#36d7b7" size="50" />
        </div>
      ) : (
        <Box>
          <div className="App_carousel">
            <Carousel_img></Carousel_img>
          </div>
          <Container maxWidth="xl" className="App_Container">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper elevation={3} sx={{ minHeight: "400px", width: "100%" }}>
                  <InputReadings
                    setLoading={setLoading}
                    setpredData={setpredData}
                    Wind_ref={Wind_ref}
                  ></InputReadings>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3} sx={{ minHeight: "400px", width: "100%" }}>
                  <PredResults
                    predData={predData}
                    Wind_ref={Wind_ref}
                  ></PredResults>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer></Footer>
        </Box>
      )}
    </div>
  );
}

export default App;

import { Carousel, Wind_reading_intf, ai_results_intf } from "./interface";
import axios from "axios";

class Wind_model {
  Carousel: Carousel[];
  turbine_readings: Wind_reading_intf;
  pred_results: ai_results_intf;

  constructor() {
    this.turbine_readings = {
      air_temp: 0,
      process_temp: 0,
      rotat_speed: 0,
      torque: 0,
      tool_wear: 0,
      h: 0,
      l: 0,
      m: 0,
    };

    this.pred_results = {
      target_fail: 0,
      no_failure: 0,
      heat_diss_fail: 0,
      overstrain_fail: 0,
      power_fail: 0,
      tool_wear_fail: 0,
      rand_fail: 0,
    };
    this.Carousel = [
      {
        img: "https://media.istockphoto.com/photos/aerial-view-of-wind-turbines-and-agriculture-field-picture-id1224819928?k=20&m=1224819928&s=612x612&w=0&h=EbxcCUjNM7apCtHGoadRFemtHyGlQhQsNVHxVm_VfXg=",
        context: "test",
      },
      {
        img: "https://www.greenorbits.com/wp-content/uploads/2021/11/Can-Wind-Turbines-Be-Placed-Anywhere.jpg",
        context: "test",
      },
    ];
  }

  SetWind_turbine_readings(inp: Wind_reading_intf) {
    this.turbine_readings = {
      air_temp: inp.air_temp,
      process_temp: inp.process_temp,
      rotat_speed: inp.rotat_speed,
      torque: inp.torque,
      tool_wear: inp.tool_wear,
      h: inp.h,
      l: inp.l,
      m: inp.m,
    };
  }

  GetAI_Failure_readings(): ai_results_intf {
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
      "Air temperature [K]": this.turbine_readings.air_temp,
      "Process temperature [K]": this.turbine_readings.process_temp,
      "Rotational speed [rpm]": this.turbine_readings.rotat_speed,
      "Torque [Nm]": this.turbine_readings.torque,
      "Tool wear [min]": this.turbine_readings.tool_wear,
      H: this.turbine_readings.h,
      L: this.turbine_readings.l,
      M: this.turbine_readings.m,
    };

    const auth = {
      username: "default\\lieuyongtan",
      password: "75488547As!",
    };
    const baseURL =
      "https://http-cors-proxy.p.rapidapi.com/https://vsystem.ingress.dh-t4ss62ru9808.di-xmj.shoot.live.k8s-hana.ondemand.com/app/pipeline-modeler/openapi/service/a851da9e-4eef-4ab9-bf3d-a5f18786d9f8/v1/uploadjson/";

    const options = {
      method: "POST",
      url: baseURL,
      headers: {
        "content-type": "application/json",
        "x-requested-with": "XMLHttpRequest",
        "X-RapidAPI-Key": "bc41357440msh081d6136a942088p184a7fjsn73ea4a87195d",
        "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
      },
      auth: auth,
      data: data,
    };

    axios
      .request(options)
      .then(function (response) {
        let StringData = JSON.stringify(response.data.Prediction);
        console.log(StringData.replace(/\s/g, "").replace(/'/g, ''));
        let JsonData = JSON.parse(StringData.replace(/\s/g, ""));
        console.log(Object.values(JsonData));
        pred_data.heat_diss_fail = JsonData["Heat Dissipation Failure"];
        pred_data.no_failure = JsonData["NoFailure"];
        pred_data.target_fail = JsonData["Target Failure"];
        pred_data.overstrain_fail = JsonData["Overstrain Failure"];
        pred_data.power_fail = JsonData["Power Failure"];
        pred_data.tool_wear_fail = JsonData["Tool Wear Failure"];
        pred_data.rand_fail = JsonData["Random Failures"];
        console.log(JsonData, pred_data, JsonData["No Failure"]);
      })
      .catch(function (error) {
        console.error(error);
      });

    this.pred_results = pred_data;
    return pred_data;
  }
}

export default Wind_model;

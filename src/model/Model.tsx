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
        img: "https://www.power-technology.com/wp-content/uploads/sites/21/2018/10/Image-1-Fosen-Vind-Wind-Power-Project.jpg",
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

  //   one = new Promise((resolve, reject) => {
  //     resolve("abc");
  //   });

  GetAI_Failure_readings = (): ai_results_intf => {
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
      "https://http-cors-proxy.p.rapidapi.com/https://vsystem.ingress.dh-t4ss62ru9808.di-xmj.shoot.live.k8s-hana.ondemand.com/app/pipeline-modeler/openapi/service/04e4a20d-92c6-4780-a01a-0cf096a9aaee/v1/uploadjson/";

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
        // console.log(response.data);
        pred_data.heat_diss_fail = response.data["Heat Dissipation Failure"];
        pred_data.no_failure = response.data["No_Failure"];
        pred_data.target_fail = response.data["Target_Failure"];
        pred_data.overstrain_fail = response.data["Overstrain_Failure"];
        pred_data.power_fail = response.data["Power_Failure"];
        pred_data.tool_wear_fail = response.data["Tool_Wear_Failure"];
        pred_data.rand_fail = response.data["Random_Failures"];
        console.log(pred_data, "PredData");
      })
      .catch(function (error) {
        console.error(error);
      });

    this.pred_results = pred_data;
    return pred_data;
  };
}

export default Wind_model;

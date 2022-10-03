export interface Carousel {
  img: string;
  context: string;
}

export interface Wind_reading_intf {
  air_temp: number;
  process_temp: number;
  rotat_speed: number;
  torque: number;
  tool_wear: number;
  h: number;
  l: number;
  m: number;
}

export interface ai_results_intf {
  target_fail: number;
  no_failure: number;
  heat_diss_fail: number;
  overstrain_fail: number;
  power_fail: number;
  tool_wear_fail: number;
  rand_fail: number;
}

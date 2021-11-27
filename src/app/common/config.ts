import {Subject} from "./subject";
import {Time} from "./time";

export interface Config {
  startTime: Time;
  subjects: Subject[];
}

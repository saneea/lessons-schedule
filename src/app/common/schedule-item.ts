import {LocalTime} from "@js-joda/core";

export interface ScheduleItem {
  start: LocalTime;
  duration: number;
  type: 'lesson' | 'break';
  subjectName?: string;
}

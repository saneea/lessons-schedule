import {LocalTime} from "@js-joda/core";

export interface ScheduleItem {
  start: LocalTime;
  end: LocalTime;
  type: 'lesson' | 'break';
  subjectName?: string;
}

import {LocalTime} from "@js-joda/core";

export interface ScheduleItem {
  start: LocalTime;
  duration: number;
  type: 'lesson' | 'break';
  subjectName?: string;
  active: boolean;
}

export function getScheduleItemEnd(scheduleItem: ScheduleItem): LocalTime {
  return scheduleItem.start.plusMinutes(scheduleItem.duration);
}

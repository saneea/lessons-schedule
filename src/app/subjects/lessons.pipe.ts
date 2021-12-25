import {Pipe, PipeTransform} from '@angular/core';
import {LessonItem} from "../subject/subject.component";
import {LocalTime} from "@js-joda/core";
import {Config} from "../common/config";

@Pipe({
  name: 'lessons'
})
export class LessonsPipe implements PipeTransform {

  transform(config: Config): LessonItem[] {
    let result: LessonItem[] = [];

    let currentStart: LocalTime = LocalTime.of(config.startTime.hours, config.startTime.minutes);

    for (const subject of config.subjects) {
      currentStart = currentStart.plusMinutes(subject.timeOffset);
      let currentEnd = currentStart.plusMinutes(subject.duration);
      result.push({
        subject: subject,
        start: currentStart,
        end: currentEnd
      });
      currentStart = currentEnd;
    }

    return result;
  }

}

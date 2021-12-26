import {Component, Input, OnInit} from '@angular/core';
import {Config} from "../common/config";
import {LocalTime} from "@js-joda/core";
import {ScheduleItem} from "../common/schedule-item";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  @Input()
  set config(value: Config) {
    this._config = value;
    this.scheduleItems = this.configToScheduleItems(value);
  }

  @Input()
  time?: LocalTime;

  _config?: Config;

  scheduleItems: ScheduleItem[] = [];

  ngOnInit(): void {
  }

  configToScheduleItems(config: Config): ScheduleItem[] {
    let result: ScheduleItem[] = [];

    let currentStart: LocalTime = LocalTime.of(config.startTime.hours, config.startTime.minutes);

    for (const subject of config.subjects) {

      let breakStart = currentStart;
      let breakEnd = breakStart.plusMinutes(subject.timeOffset);

      let breakItem: ScheduleItem = {
        type: 'break',
        start: breakStart,
        end: breakEnd
      };

      result.push(breakItem);

      let lessonStart = breakEnd;
      let lessonEnd = lessonStart.plusMinutes(subject.duration);

      let lessonItem: ScheduleItem = {
        type: 'lesson',
        start: lessonStart,
        end: lessonEnd,
        subjectName: subject.name
      };

      result.push(lessonItem);

      currentStart = lessonEnd;
    }

    return result;
  }

}

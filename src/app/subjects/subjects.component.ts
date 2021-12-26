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

      let breakItem: ScheduleItem = {
        type: 'break',
        start: currentStart,
        duration: subject.timeOffset
      };

      result.push(breakItem);

      let lessonStart = currentStart.plusMinutes(subject.timeOffset);

      let lessonItem: ScheduleItem = {
        type: 'lesson',
        start: lessonStart,
        duration: subject.duration,
        subjectName: subject.name
      };

      result.push(lessonItem);

      currentStart = lessonStart.plusMinutes(subject.duration);
    }

    return result;
  }

}

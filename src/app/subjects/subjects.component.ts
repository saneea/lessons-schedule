import {Component, Input, OnInit} from '@angular/core';
import {Config} from "../common/config";
import {LocalTime} from "@js-joda/core";
import {getScheduleItemEnd, ScheduleItem} from "../common/schedule-item";

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
  set time(value: LocalTime) {
    this._time = value;
    this.updateStatuses();
  }

  _config?: Config;
  _time?: LocalTime;

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
        duration: subject.timeOffset,
        active: false
      };

      result.push(breakItem);

      let lessonStart = currentStart.plusMinutes(subject.timeOffset);

      let lessonItem: ScheduleItem = {
        type: 'lesson',
        start: lessonStart,
        duration: subject.duration,
        subjectName: subject.name,
        active: false
      };

      result.push(lessonItem);

      currentStart = lessonStart.plusMinutes(subject.duration);
    }

    return result;
  }

  updateStatuses() {
    if (this._time) {
      for (const scheduleItem of this.scheduleItems) {
        let endTime = getScheduleItemEnd(scheduleItem);
        scheduleItem.active = scheduleItem.start.compareTo(this._time) <= 0 && this._time.compareTo(endTime) < 0
      }
    }
  }

}

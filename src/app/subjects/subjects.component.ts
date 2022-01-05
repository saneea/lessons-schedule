import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from "../common/config";
import {LocalTime} from "@js-joda/core";
import {getScheduleItemEnd, ScheduleItem} from "../common/schedule-item";

export enum LessonStatus {
  started,
  finished
}

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

  @Output()
  onLessonStatusChanged = new EventEmitter<LessonStatus>();

  _config?: Config;
  _time?: LocalTime;

  scheduleItems: ScheduleItem[] = [];

  ngOnInit(): void {
  }

  configToScheduleItems(config: Config): ScheduleItem[] {
    let result: ScheduleItem[] = [];

    let currentStart: LocalTime = LocalTime.of(config.startTime.hours, config.startTime.minutes);

    for (const subject of config.subjects) {

      let lessonItem: ScheduleItem = {
        type: 'lesson',
        start: currentStart,
        duration: subject.duration,
        subjectName: subject.name,
        active: false
      };

      result.push(lessonItem);

      let breakStart = currentStart.plusMinutes(subject.duration);

      let breakItem: ScheduleItem = {
        type: 'break',
        start: breakStart,
        duration: subject.breakTimeAfter,
        active: false
      };

      result.push(breakItem);

      currentStart = breakStart.plusMinutes(subject.breakTimeAfter);
    }

    return result;
  }

  updateStatuses() {
    if (this._time) {
      for (const scheduleItem of this.scheduleItems) {
        let endTime = getScheduleItemEnd(scheduleItem);
        let newStatus = scheduleItem.start.compareTo(this._time) <= 0 && this._time.compareTo(endTime) < 0;

        if (scheduleItem.type === 'lesson') {
          if (!scheduleItem.active && newStatus) {
            this.onLessonStatusChanged.emit(LessonStatus.started);
          } else if (scheduleItem.active && !newStatus) {
            this.onLessonStatusChanged.emit(LessonStatus.finished);
          }
        }

        scheduleItem.active = newStatus;
      }
    }
  }

}

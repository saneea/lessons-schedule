import {Component, Input, OnInit} from '@angular/core';
import {Config} from "../common/config";
import {LessonItem} from "../subject/subject.component";
import {LocalTime} from "@js-joda/core";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  @Input()
  set config(value: Config) {
    this._config = value;
    this.lessons = this.configToLessons(value);
  }

  @Input()
  time?: LocalTime;

  _config?: Config;

  lessons: LessonItem[] = [];

  ngOnInit(): void {
  }

  configToLessons(config: Config): LessonItem[] {
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

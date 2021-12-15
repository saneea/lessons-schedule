import {Component, OnInit} from '@angular/core';
import {Subject} from "../common/subject";
import {ConfigService} from "../services/config.service";
import {Config} from "../common/config";
import {LocalTime} from "@js-joda/core";
import {LessonItem} from "../subject/subject.component";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
  }

  getConfig(): Config {
    return this.configService.getConfig()
  }

  getLessons(): LessonItem[] {
    let result: LessonItem[] = [];
    let config = this.getConfig();

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

  onAddSubject(): void {
    this.configService.addSubject({
      name: 'New subject',
      timeOffset: 10,
      duration: 15
    })
  }

  deleteSubject(subject: Subject): void {
    this.configService.deleteSubject(subject);
  }

  onConfigEdited() {
    this.configService.onConfigEdited();
  }
}

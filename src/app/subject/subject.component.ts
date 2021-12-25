import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../common/subject";
import {LocalTime} from "@js-joda/core";

export interface LessonItem {
  start: LocalTime;
  end: LocalTime;
  subject: Subject;
}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() lessonItem?: LessonItem;

  @Input() inProgress: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

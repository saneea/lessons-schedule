import {Component, Input, OnInit} from '@angular/core';
import {getScheduleItemEnd, ScheduleItem} from "../common/schedule-item";
import {LocalTime} from "@js-joda/core";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() set scheduleItem(value: ScheduleItem) {
    this._scheduleItem = value;
    this.end = getScheduleItemEnd(value);
  }

  @Input() inProgress: boolean = false;

  _scheduleItem?: ScheduleItem;

  end?: LocalTime;

  constructor() {
  }

  ngOnInit(): void {
  }

}

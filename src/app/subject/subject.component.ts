import {Component, Input, OnInit} from '@angular/core';
import {ScheduleItem} from "../common/schedule-item";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() set scheduleItem(value: ScheduleItem) {
    this._scheduleItem = value;
  }

  @Input() inProgress: boolean = false;

  _scheduleItem?: ScheduleItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}

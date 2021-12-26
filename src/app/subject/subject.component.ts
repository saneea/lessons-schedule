import {Component, Input, OnInit} from '@angular/core';
import {ScheduleItem} from "../common/schedule-item";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() scheduleItem?: ScheduleItem;

  @Input() inProgress: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

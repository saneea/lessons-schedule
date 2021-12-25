import {Component, Input, OnInit} from '@angular/core';
import {Time} from "../common/time";

@Component({
  selector: 'app-lessons-start',
  templateUrl: './lessons-start.component.html',
  styleUrls: ['./lessons-start.component.scss']
})
export class LessonsStartComponent implements OnInit {

  @Input() startTime?: Time;

  constructor() {
  }

  ngOnInit(): void {
  }

}

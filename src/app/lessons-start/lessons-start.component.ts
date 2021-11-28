import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Time} from "../common/time";

@Component({
  selector: 'app-lessons-start',
  templateUrl: './lessons-start.component.html',
  styleUrls: ['./lessons-start.component.scss']
})
export class LessonsStartComponent implements OnInit {

  @Input() startTime?: Time;

  @Output() onEdited = new EventEmitter();

  inEdit: boolean = false;

  editorStartTime: Time = {
    hours: 0,
    minutes: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(): void {
    this.inEdit = true;
    if (this.startTime) {
      this.editorStartTime.hours = this.startTime.hours;
      this.editorStartTime.minutes = this.startTime.minutes;
    }
  }

  onApplyChangesClick(): void {
    this.inEdit = false;
    if (this.startTime) {
      this.startTime.hours = this.editorStartTime.hours;
      this.startTime.minutes = this.editorStartTime.minutes;
    }
    this.onEdited.emit();
  }

  onDiscardChangesClick(): void {
    this.inEdit = false;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() onDelete = new EventEmitter();

  @Output() onEdited = new EventEmitter();

  inEdit: boolean = false;

  editorSubject: Subject = {
    name: '',
    timeOffset: 0,
    duration: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.onDelete.emit();
  }

  onEditClick(): void {
    console.log('onEditClick()')
    this.inEdit = true;
    console.log('onEditClick(2)')
    if (this.lessonItem) {
      console.log('onEditClick(3)')
      this.editorSubject.name = this.lessonItem.subject.name;

      this.editorSubject.timeOffset = this.lessonItem.subject.timeOffset;
      this.editorSubject.duration = this.lessonItem.subject.duration;
    }
  }

  onApplyChangesClick(): void {
    this.inEdit = false;
    if (this.lessonItem) {
      this.lessonItem.subject.name = this.editorSubject.name;
      this.lessonItem.subject.timeOffset = this.editorSubject.timeOffset;
      this.lessonItem.subject.duration = this.editorSubject.duration;
    }
    this.onEdited.emit();
  }

  onDiscardChangesClick(): void {
    this.inEdit = false;
  }

}

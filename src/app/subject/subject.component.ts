import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "../subject";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() subject?: Subject;

  @Output() onDelete = new EventEmitter();

  @Output() onEdited = new EventEmitter();

  inEdit: boolean = false;

  editorSubject: Subject = {
    name: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.onDelete.emit();
  }

  onEditClick(): void {
    this.inEdit = true;
    if (this.subject) {
      this.editorSubject.name = this.subject.name;
    }
  }

  onApplyChangesClick(): void {
    this.inEdit = false;
    if (this.subject) {
      this.subject.name = this.editorSubject.name;
    }
    this.onEdited.emit();
  }

  onDiscardChangesClick(): void {
    this.inEdit = false;
  }

}

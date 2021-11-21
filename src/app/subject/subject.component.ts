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

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.onDelete.emit();
  }

}

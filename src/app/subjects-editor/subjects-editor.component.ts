import {Component, Input, OnInit} from '@angular/core';
import {Config} from "../common/config";
import {Subject} from "../common/subject";
import {currentResources} from "../common/resources";

@Component({
  selector: 'app-subjects-editor',
  templateUrl: './subjects-editor.component.html',
  styleUrls: ['./subjects-editor.component.scss']
})
export class SubjectsEditorComponent implements OnInit {

  r = currentResources;

  @Input()
  public config?: Config;

  ngOnInit(): void {
  }

  onDeleteClick(subject: Subject): void {
    if (this.config) {
      const indexToRemove: number = this.config.subjects.indexOf(subject, 0);
      if (indexToRemove > -1) {
        this.config.subjects.splice(indexToRemove, 1);
      }
    }
  }

  onAddSubject(): void {
    if (this.config) {
      this.config.subjects.push({
        name: 'New subject',
        breakTimeAfter: 10,
        duration: 15
      });
    }
  }

}

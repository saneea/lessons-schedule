import {Component, OnInit} from '@angular/core';
import {Subject} from "../subject";
import {SubjectsService} from "../services/subjects.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectsService: SubjectsService) {
  }

  ngOnInit(): void {
  }

  getSubjects(): Subject[] {
    return this.subjectsService.getSubjects()
  }

  onAddSubject(): void {
    this.subjectsService.addSubject({
      name: 'New subject'
    })
  }

  deleteSubject(subject: Subject): void {
    this.subjectsService.deleteSubject(subject);
  }

  onSubjectEdited() {
    this.subjectsService.onSubjectEdited();
  }
}

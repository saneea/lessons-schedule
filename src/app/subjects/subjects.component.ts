import {Component, OnInit} from '@angular/core';
import {Subject} from "../common/subject";
import {ConfigService} from "../services/config.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
  }

  getSubjects(): Subject[] {
    return this.configService.getSubjects()
  }

  onAddSubject(): void {
    this.configService.addSubject({
      name: 'New subject',
      timeOffset: 10,
      duration: 15
    })
  }

  deleteSubject(subject: Subject): void {
    this.configService.deleteSubject(subject);
  }

  onSubjectEdited() {
    this.configService.onSubjectEdited();
  }
}

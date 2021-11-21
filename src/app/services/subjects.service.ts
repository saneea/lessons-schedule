import {Injectable} from '@angular/core';
import {Subject} from "../subject";
import {SUBJECTS} from "../mock-subjects";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() {
  }

  getSubjects(): Subject[] {
    return SUBJECTS;
  }

  addSubject(subject: Subject) {
    SUBJECTS.push(subject);
  }

  deleteSubject(subject: Subject) {
    const indexToRemove: number = SUBJECTS.indexOf(subject, 0);
    if (indexToRemove > -1) {
      SUBJECTS.splice(indexToRemove, 1);
    }
  }
}

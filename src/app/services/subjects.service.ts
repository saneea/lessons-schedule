import {Injectable} from '@angular/core';
import {Subject} from "../subject";

const SUBJECTS_KEY: string = "subjects";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subjects: Subject[] = this.readConfig();

  constructor() {
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }

  addSubject(subject: Subject) {
    this.subjects.push(subject);
    this.saveConfig();
  }

  deleteSubject(subject: Subject) {
    const indexToRemove: number = this.subjects.indexOf(subject, 0);
    if (indexToRemove > -1) {
      this.subjects.splice(indexToRemove, 1);
    }
    this.saveConfig();
  }

  onSubjectEdited() {
    this.saveConfig();
  }

  saveConfig() {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(this.subjects));
  }

  readConfig(): Subject[] {
    let subjectsJson = localStorage.getItem(SUBJECTS_KEY);
    return subjectsJson ? JSON.parse(subjectsJson) : [];
  }

}

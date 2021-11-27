import {Injectable} from '@angular/core';
import {Subject} from '../common/subject';

const CONFIG_KEY: string = 'config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

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
    localStorage.setItem(CONFIG_KEY, JSON.stringify(this.subjects));
  }

  readConfig(): Subject[] {
    let subjectsJson = localStorage.getItem(CONFIG_KEY);
    return subjectsJson ? JSON.parse(subjectsJson) : [];
  }

}

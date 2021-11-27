import {Injectable} from '@angular/core';
import {Subject} from '../common/subject';
import {Config} from "../common/config";

const CONFIG_KEY: string = 'config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config = this.readConfig();

  constructor() {
  }

  getConfig(): Config {
    return this.config;
  }

  addSubject(subject: Subject) {
    this.config.subjects.push(subject);
    this.saveConfig();
  }

  deleteSubject(subject: Subject) {
    const indexToRemove: number = this.config.subjects.indexOf(subject, 0);
    if (indexToRemove > -1) {
      this.config.subjects.splice(indexToRemove, 1);
    }
    this.saveConfig();
  }

  onSubjectEdited() {
    this.saveConfig();
  }

  saveConfig() {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(this.config));
  }

  readConfig(): Config {
    let subjectsJson = localStorage.getItem(CONFIG_KEY);
    return subjectsJson
      ? JSON.parse(subjectsJson)
      : {
        startTime: {
          hours: 12,
          minutes: 0
        },
        subjects: []
      };
  }

}

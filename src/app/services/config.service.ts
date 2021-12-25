import {Injectable} from '@angular/core';
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

  onConfigEdited(newConfig: Config) {
    this.config = newConfig;
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

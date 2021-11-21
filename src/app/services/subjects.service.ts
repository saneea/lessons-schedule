import { Injectable } from '@angular/core';
import {Subject} from "../subject";
import {SUBJECTS} from "../mock-subjects";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  getSubjects(): Subject[] {
    return SUBJECTS;
  }

  addSubject(subject: Subject) {
    SUBJECTS.push(subject);
  }

}

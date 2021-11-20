import { Component, OnInit } from '@angular/core';
import {SUBJECTS} from "../mock-subjects";
import {Subject} from "../subject";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[] = SUBJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}

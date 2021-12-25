import {Component, Input, OnInit} from '@angular/core';
import {Config} from "../common/config";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  @Input()
  config?: Config;

  ngOnInit(): void {
  }

}

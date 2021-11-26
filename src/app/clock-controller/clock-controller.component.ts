import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock-controller',
  templateUrl: './clock-controller.component.html',
  styleUrls: ['./clock-controller.component.scss']
})
export class ClockControllerComponent implements OnInit, OnDestroy {

  intervalId?: number;

  displayDate: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.updateDisplayDate();
    this.intervalId = setInterval(() => {
      this.updateDisplayDate();
    }, 500);
  }

  private updateDisplayDate(): void {
    this.displayDate = '' + new Date();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }


}

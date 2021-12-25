import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {equalTime, Time} from "../common/time";

@Component({
  selector: 'app-clock-controller',
  templateUrl: './clock-controller.component.html',
  styleUrls: ['./clock-controller.component.scss']
})
export class ClockControllerComponent implements OnInit, OnDestroy {

  @Output()
  onTimeChanged = new EventEmitter<Time>();

  intervalId?: number;

  displayDate: string = '';

  currentTime: Time = {
    hours: -1,
    minutes: -1
  };

  constructor() {
  }

  ngOnInit(): void {
    this.updateDisplayDate();
    this.intervalId = setInterval(() => {
      this.updateDisplayDate();
    }, 500);
  }

  private updateDisplayDate(): void {
    let date = new Date();
    this.displayDate = '' + date;

    let t = {
      hours: date.getHours(),
      minutes: date.getMinutes()
    }

    if (!equalTime(this.currentTime, t)) {
      this.currentTime = t;
      this.onTimeChanged.emit(this.currentTime);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }


}

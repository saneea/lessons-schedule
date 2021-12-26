import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {LocalTime} from "@js-joda/core";

@Component({
  selector: 'app-clock-controller',
  templateUrl: './clock-controller.component.html',
  styleUrls: ['./clock-controller.component.scss']
})
export class ClockControllerComponent implements OnInit, OnDestroy {

  @Output()
  onTimeChanged = new EventEmitter<LocalTime>();

  intervalId?: number;

  displayDate: string = '';

  currentTime: LocalTime = LocalTime.of(0, 0);

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

    let t = LocalTime.of(date.getHours(), date.getMinutes())

    if (!this.currentTime.equals(t)) {
      this.currentTime = t;
      this.onTimeChanged.emit(this.currentTime);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }


}

import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./services/config.service";
import {Config} from "./common/config";
import {Time} from "./common/time";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  inEdit: boolean = false;
  config?: Config;
  editableConfig?: Config;

  currentTime: Time = {
    hours: -1,
    minutes: -1
  }

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.config = this.configService.getConfig();
  }

  onEditClick(): void {
    this.inEdit = true;
    this.editableConfig = JSON.parse(JSON.stringify(this.config));
  }

  onApplyChangesClick(): void {
    this.inEdit = false;
    if (this.editableConfig) {
      this.config = JSON.parse(JSON.stringify(this.editableConfig));
      this.configService.onConfigEdited(this.editableConfig);
    }
  }

  onDiscardChangesClick(): void {
    this.inEdit = false;
  }

  onTimeChanged(time: Time): void {
    this.currentTime = time;
  }

}

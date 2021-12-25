import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormsModule } from "@angular/forms";
import { ClockControllerComponent } from './clock-controller/clock-controller.component';
import { LessonsStartComponent } from './lessons-start/lessons-start.component';
import { LessonsPipe } from './subjects/lessons.pipe';
import { SubjectsEditorComponent } from './subjects-editor/subjects-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubjectsComponent,
    ClockControllerComponent,
    LessonsStartComponent,
    LessonsPipe,
    SubjectsEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

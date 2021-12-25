import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsEditorComponent } from './subjects-editor.component';

describe('SubjectsEditorComponent', () => {
  let component: SubjectsEditorComponent;
  let fixture: ComponentFixture<SubjectsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

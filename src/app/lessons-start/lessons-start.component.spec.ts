import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsStartComponent } from './lessons-start.component';

describe('LessonsStartComponent', () => {
  let component: LessonsStartComponent;
  let fixture: ComponentFixture<LessonsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

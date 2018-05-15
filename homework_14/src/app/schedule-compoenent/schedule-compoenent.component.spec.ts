import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCompoenentComponent } from './schedule-compoenent.component';

describe('ScheduleCompoenentComponent', () => {
  let component: ScheduleCompoenentComponent;
  let fixture: ComponentFixture<ScheduleCompoenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCompoenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

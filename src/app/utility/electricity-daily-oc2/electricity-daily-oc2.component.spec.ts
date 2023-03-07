import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityDailyOc2Component } from './electricity-daily-oc2.component';

describe('ElectricityDailyOc2Component', () => {
  let component: ElectricityDailyOc2Component;
  let fixture: ComponentFixture<ElectricityDailyOc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityDailyOc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityDailyOc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityDailyOc1Component } from './electricity-daily-oc1.component';

describe('ElectricityDailyOc1Component', () => {
  let component: ElectricityDailyOc1Component;
  let fixture: ComponentFixture<ElectricityDailyOc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityDailyOc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityDailyOc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

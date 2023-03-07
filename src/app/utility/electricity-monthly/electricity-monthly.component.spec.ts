import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityMonthlyComponent } from './electricity-monthly.component';

describe('ElectricityMonthlyComponent', () => {
  let component: ElectricityMonthlyComponent;
  let fixture: ComponentFixture<ElectricityMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

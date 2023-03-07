import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterMonthlyComponent } from './water-monthly.component';

describe('WaterMonthlyComponent', () => {
  let component: WaterMonthlyComponent;
  let fixture: ComponentFixture<WaterMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDailyComponent } from './water-daily.component';

describe('WaterDailyComponent', () => {
  let component: WaterDailyComponent;
  let fixture: ComponentFixture<WaterDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

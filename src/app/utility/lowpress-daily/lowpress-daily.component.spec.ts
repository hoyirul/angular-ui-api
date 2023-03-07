import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowpressDailyComponent } from './lowpress-daily.component';

describe('LowpressDailyComponent', () => {
  let component: LowpressDailyComponent;
  let fixture: ComponentFixture<LowpressDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowpressDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowpressDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

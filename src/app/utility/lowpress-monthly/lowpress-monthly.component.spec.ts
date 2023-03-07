import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowpressMonthlyComponent } from './lowpress-monthly.component';

describe('LowpressMonthlyComponent', () => {
  let component: LowpressMonthlyComponent;
  let fixture: ComponentFixture<LowpressMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowpressMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowpressMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

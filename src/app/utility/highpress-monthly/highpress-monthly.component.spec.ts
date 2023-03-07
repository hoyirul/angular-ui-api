import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpressMonthlyComponent } from './highpress-monthly.component';

describe('HighpressMonthlyComponent', () => {
  let component: HighpressMonthlyComponent;
  let fixture: ComponentFixture<HighpressMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighpressMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighpressMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpressDailyComponent } from './highpress-daily.component';

describe('HighpressDailyComponent', () => {
  let component: HighpressDailyComponent;
  let fixture: ComponentFixture<HighpressDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighpressDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighpressDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

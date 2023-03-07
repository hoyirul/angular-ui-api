import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmReportComponent } from './am-report.component';

describe('AmReportComponent', () => {
  let component: AmReportComponent;
  let fixture: ComponentFixture<AmReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

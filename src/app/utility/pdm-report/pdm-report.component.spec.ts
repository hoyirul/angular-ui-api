import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdmReportComponent } from './pdm-report.component';

describe('PdmReportComponent', () => {
  let component: PdmReportComponent;
  let fixture: ComponentFixture<PdmReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdmReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdmReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

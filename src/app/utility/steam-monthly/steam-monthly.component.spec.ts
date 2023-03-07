import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamMonthlyComponent } from './steam-monthly.component';

describe('SteamMonthlyComponent', () => {
  let component: SteamMonthlyComponent;
  let fixture: ComponentFixture<SteamMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

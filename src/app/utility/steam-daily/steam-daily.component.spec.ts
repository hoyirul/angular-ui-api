import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamDailyComponent } from './steam-daily.component';

describe('SteamDailyComponent', () => {
  let component: SteamDailyComponent;
  let fixture: ComponentFixture<SteamDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

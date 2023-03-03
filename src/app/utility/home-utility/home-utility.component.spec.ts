import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUtilityComponent } from './home-utility.component';

describe('HomeUtilityComponent', () => {
  let component: HomeUtilityComponent;
  let fixture: ComponentFixture<HomeUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUtilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

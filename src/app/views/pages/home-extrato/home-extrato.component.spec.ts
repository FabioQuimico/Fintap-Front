import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExtratoComponent } from './home-extrato.component';

describe('HomeExtratoComponent', () => {
  let component: HomeExtratoComponent;
  let fixture: ComponentFixture<HomeExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExtratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

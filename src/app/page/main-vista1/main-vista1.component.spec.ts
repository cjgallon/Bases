import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVista1Component } from './main-vista1.component';

describe('MainVista1Component', () => {
  let component: MainVista1Component;
  let fixture: ComponentFixture<MainVista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVista1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

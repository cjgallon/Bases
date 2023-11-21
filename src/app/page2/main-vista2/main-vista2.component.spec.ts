import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVista2Component } from './main-vista2.component';

describe('MainVista2Component', () => {
  let component: MainVista2Component;
  let fixture: ComponentFixture<MainVista2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVista2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

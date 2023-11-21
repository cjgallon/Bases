import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB10Component } from './section-b10.component';

describe('SectionB10Component', () => {
  let component: SectionB10Component;
  let fixture: ComponentFixture<SectionB10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB4Component } from './section-b4.component';

describe('SectionB4Component', () => {
  let component: SectionB4Component;
  let fixture: ComponentFixture<SectionB4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

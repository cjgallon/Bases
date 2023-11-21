import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB5Component } from './section-b5.component';

describe('SectionB5Component', () => {
  let component: SectionB5Component;
  let fixture: ComponentFixture<SectionB5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

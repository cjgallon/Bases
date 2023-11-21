import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './page/section1/section1.component';
import { Section2Component } from './page/section2/section2.component';
import { Section3Component } from './page/section3/section3.component';
import { Section4Component } from './page/section4/section4.component';
import { Section5Component } from './page/section5/section5.component';
import { SectionB0Component } from './page2/section-b0/section-b0.component';
import { SectionB1Component } from './page2/section-b1/section-b1.component';
import { SectionB2Component } from './page2/section-b2/section-b2.component';
import { SectionB3Component } from './page2/section-b3/section-b3.component';
import { SectionB4Component } from './page2/section-b4/section-b4.component';
import { SectionB5Component } from './page2/section-b5/section-b5.component';
import { SectionB6Component } from './page2/section-b6/section-b6.component';
import { SectionB7Component } from './page2/section-b7/section-b7.component';
import { SectionB8Component } from './page2/section-b8/section-b8.component';
import { SectionB9Component } from './page2/section-b9/section-b9.component';
import { SectionB10Component } from './page2/section-b10/section-b10.component';
import { MainVista1Component } from './page/main-vista1/main-vista1.component';
import { MainVista2Component } from './page2/main-vista2/main-vista2.component';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    SectionB0Component,
    SectionB1Component,
    SectionB2Component,
    SectionB3Component,
    SectionB4Component,
    SectionB5Component,
    SectionB6Component,
    SectionB7Component,
    SectionB8Component,
    SectionB9Component,
    SectionB10Component,
    MainVista1Component,
    MainVista2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

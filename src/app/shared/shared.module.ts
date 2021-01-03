import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MzdTimelineModule } from 'ngx-mzd-timeline';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MzdTimelineModule,
  ],
  exports: [
    NavbarComponent,
    MzdTimelineModule
  ]
})
export class SharedModule { }

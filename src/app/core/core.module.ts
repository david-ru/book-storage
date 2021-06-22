import { NgModule } from '@angular/core';

import { LeftSidePanelComponent } from './left-side-panel/left-side-panel.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LeftSidePanelComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LeftSidePanelComponent,
    HeaderComponent,
  ],
  providers: []
})
export class CoreModule { }

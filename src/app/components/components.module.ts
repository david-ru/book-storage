import { NgModule } from '@angular/core';

import { MessageModalComponent } from './message-modal/message-modal.component';
import { CardComponent } from './card/card.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardComponent,
    ContentHeaderComponent,
    MessageModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CardComponent,
    ContentHeaderComponent,
    MessageModalComponent
  ],
  providers: []
})
export class ComponentsModule { }

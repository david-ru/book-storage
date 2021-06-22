import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { BookManagementRoutingModule } from './book-management-routing.module';
import { BookManagementComponent } from './book-management.component';
import { AddBookWizardComponent } from './components/add-book-wizard/add-book-wizard.component';
import { BookDetailsEditComponent } from './components/book-details-edit/book-details-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsEditComponent,
    AddBookWizardComponent,
    BookManagementComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    BookManagementRoutingModule,
  ],
  exports: [
    BookListComponent,
    BookDetailsEditComponent,
    AddBookWizardComponent,
    BookManagementComponent
  ],
  providers: []
})
export class BookManagementModule { }

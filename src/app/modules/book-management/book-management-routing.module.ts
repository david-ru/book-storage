import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookWizardComponent } from './components/add-book-wizard/add-book-wizard.component';
import { BookDetailsEditComponent } from './components/book-details-edit/book-details-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';


const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'edit-book', component: BookDetailsEditComponent },
  { path: 'add-book-wizard', component: AddBookWizardComponent },
  { path: '**', component: BookListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookManagementRoutingModule { }

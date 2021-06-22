import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'book-management', 
    loadChildren: () => import('./modules/book-management/book-management.module').then(m => m.BookManagementModule),
  },
  { 
    path: '**', 
    loadChildren: () => import('./modules/book-management/book-management.module').then(m => m.BookManagementModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



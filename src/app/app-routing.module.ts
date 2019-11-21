import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoCreateComponent} from './photo-create/photo-create.component';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoEditComponent} from './photo-edit/photo-edit.component';
import {PhotoDeleteComponent} from "./photo-delete/photo-delete.component";


const routes: Routes = [
  { path: 'photos/create',
    component: PhotoCreateComponent
  },
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/edit/:id',
    component: PhotoEditComponent
  },
  {
    path: 'photos/delete/:id',
    component: PhotoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

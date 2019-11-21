import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PhotoCreateComponent } from './photo-create/photo-create.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoDeleteComponent } from './photo-delete/photo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoCreateComponent,
    PhotoListComponent,
    PhotoEditComponent,
    PhotoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ConvertToSpacePipe} from './shared/convert-to-space-pipe';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent, ProductListComponent,ConvertToSpacePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

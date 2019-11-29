import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ConvertToSpacePipe} from './shared/convert-to-space-pipe';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  HttpClientModule,
                  RouterModule.forRoot([{path:'products', component:ProductListComponent},
                  {path:'products/:id', component:ProductDetailComponent},
                  {path:'welcome', component:WelcomeComponent},
                  {path:'',redirectTo:'welcome', pathMatch:'full'},
                  {path:'**', component:PageNotFoundComponent}
                  ])
                  ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent,ConvertToSpacePipe,StarComponent, WelcomeComponent, ProductDetailComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

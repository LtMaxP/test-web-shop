import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [  
  {path: 'home', component:HomeComponent, title:"HomePage :)"},
  {path: 'catalog', component:CatalogComponent, title:"CatalogPage :D"},
  {path: 'cart', component:CartComponent, title:"Carrito :E"},
  {path: 'signin', component:SignInComponent, title:"Sign In :3"},
  {path: 'register', component:RegisterFormComponent, title:"Registrar"},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes), 
      HttpClientModule, FormsModule, BrowserModule
    ],
    exports: [RouterModule]
  })
  export class AppModule { }
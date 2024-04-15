import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [  
  {path: 'home', component:HomeComponent, title:"HomePage :)"},
  {path: 'catalog', component:CatalogComponent, title:"CatalogPage :D"},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes), HttpClientModule
    ],
    exports: [RouterModule]
  })
  export class AppModule { }
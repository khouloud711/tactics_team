import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { CalendrierComponent } from './calendrier/calendrier.component';


const routes: Routes = [
  { path: '', component: HomeComponent },              
  { path: 'calendrier', component: CalendrierComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

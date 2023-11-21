import { MainVista1Component } from './page/main-vista1/main-vista1.component';
import { MainVista2Component } from './page2/main-vista2/main-vista2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'mainVista1', component: MainVista1Component },
  { path: 'mainVista2', component: MainVista2Component },
  { path: '**', redirectTo: 'mainVista1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

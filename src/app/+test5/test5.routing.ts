import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test5Component} from "./test5.component";



const routes: Routes = [
  { path: '', component: Test5Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test5RoutingModule { }

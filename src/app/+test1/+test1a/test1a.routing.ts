import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test1aComponent} from "./test1a.component";



const routes: Routes = [
  { path: '', component: Test1aComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test1aRoutingModule { }

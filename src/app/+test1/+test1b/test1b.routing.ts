import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test1bComponent} from "./test1b.component";



const routes: Routes = [
  { path: '', component: Test1bComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test1bRoutingModule { }

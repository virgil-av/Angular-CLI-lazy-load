import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test1Component} from "./test1.component";



const routes: Routes = [
  { path: '', component: Test1Component },
  { path: 'test1a', loadChildren: './+test1a/test1a.module#Test1aModule' },
  { path: 'test1b', loadChildren: './+test1b/test1b.module#Test1bModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test1RoutingModule { }

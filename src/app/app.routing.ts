import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: './+about/about.module#AboutModule' },
  { path: 'test1', loadChildren: './+test1/test1.module#Test1Module' },
  { path: 'test2', loadChildren: './+test2/test2.module#Test2Module' },
  { path: 'test3', loadChildren: './+test3/test3.module#Test3Module' },
  { path: 'test4', loadChildren: './+test4/test4.module#Test4Module' },
  { path: 'test5', loadChildren: './+test5/test5.module#Test5Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

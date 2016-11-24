import { NgModule } from '@angular/core';

import {Test1RoutingModule} from "./test1.routing";

import {Test1Component} from "./test1.component";




@NgModule({
  imports: [
    Test1RoutingModule
  ],
  exports: [],
  declarations: [Test1Component],
  providers: [],
})
export class Test1Module { }

import { NgModule } from '@angular/core';

import {Test2RoutingModule} from "./test2.routing";

import {Test2Component} from "./test2.component";




@NgModule({
  imports: [
    Test2RoutingModule
  ],
  exports: [],
  declarations: [Test2Component],
  providers: [],
})
export class Test2Module { }

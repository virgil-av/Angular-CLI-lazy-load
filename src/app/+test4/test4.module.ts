import { NgModule } from '@angular/core';

import {Test4RoutingModule} from "./test4.routing";

import {Test4Component} from "./test4.component";




@NgModule({
  imports: [
    Test4RoutingModule
  ],
  exports: [],
  declarations: [Test4Component],
  providers: [],
})
export class Test4Module { }

import { NgModule } from '@angular/core';

import {Test5RoutingModule} from "./test5.routing";

import {Test5Component} from "./test5.component";




@NgModule({
  imports: [
    Test5RoutingModule
  ],
  exports: [],
  declarations: [Test5Component],
  providers: [],
})
export class Test5Module { }

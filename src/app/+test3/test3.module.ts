import { NgModule } from '@angular/core';

import {Test3RoutingModule} from "./test3.routing";

import {Test3Component} from "./test3.component";




@NgModule({
  imports: [
    Test3RoutingModule
  ],
  exports: [],
  declarations: [Test3Component],
  providers: [],
})
export class Test3Module { }

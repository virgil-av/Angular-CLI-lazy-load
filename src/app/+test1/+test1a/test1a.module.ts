import { NgModule } from '@angular/core';

import {Test1aRoutingModule} from "./test1a.routing";

import {Test1aComponent} from "./test1a.component";




@NgModule({
  imports: [
    Test1aRoutingModule
  ],
  exports: [],
  declarations: [Test1aComponent],
  providers: [],
})
export class Test1aModule { }

import { NgModule } from '@angular/core';

import {Test1bRoutingModule} from "./test1b.routing";

import {Test1bComponent} from "./test1b.component";




@NgModule({
  imports: [
    Test1bRoutingModule
  ],
  exports: [],
  declarations: [Test1bComponent],
  providers: [],
})
export class Test1bModule { }

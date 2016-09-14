import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { DoublePipe } from "./double.pipe";
import { FilterPipe } from "./filter.pipe";




@NgModule({
  declarations: [ AppComponent, DoublePipe, FilterPipe ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


































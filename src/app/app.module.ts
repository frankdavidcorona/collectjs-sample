import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectjsSampleComponent } from './collectjs-sample/collectjs-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectjsSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

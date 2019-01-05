import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BookComponent } from './book/book.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BookComponent,
    WrongPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaughterComponent } from './components/daughter/daughter.component';
import { GranddaughterComponent } from './components/granddaughter/granddaughter.component';

@NgModule({
  declarations: [
    AppComponent,
    DaughterComponent,
    GranddaughterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

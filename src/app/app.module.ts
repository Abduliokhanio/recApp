import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './inputForm/input-form/input-form.component';
import { RecListComponent } from './recList/rec-list/rec-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    RecListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';  
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

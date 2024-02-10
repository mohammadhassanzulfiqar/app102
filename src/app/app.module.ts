import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { EventComponent } from './components/event/event.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,


    FormsModule,
    AppRoutingModule,
    HttpClientModule 
   // RouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    EventComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
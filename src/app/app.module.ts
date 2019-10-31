import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule(
{
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
}
)
export class AppModule { }

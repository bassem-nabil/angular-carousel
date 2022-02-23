import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselDemoComponent } from './carouselDemo/carouselDemo.component';
import { NgCarouselModule } from 'angular-custom-carousel';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgCarouselModule ],
  declarations: [ AppComponent, CarouselDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

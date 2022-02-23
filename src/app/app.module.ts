import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgCarouselModule } from 'angular-custom-carousel';
import { AppComponent } from './app.component';
import { CarouselDemoComponent } from './carouselDemo/carouselDemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgCarouselModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, CarouselDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

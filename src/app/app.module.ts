import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxHoverOpacityModule } from 'ngx-hover-opacity';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, NgxHoverOpacityModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

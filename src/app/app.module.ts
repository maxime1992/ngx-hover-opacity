import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxHoverOpacityModule } from 'ngx-hover-opacity';
import { AppComponent } from './app.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ...MATERIAL_MODULES, NgxHoverOpacityModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

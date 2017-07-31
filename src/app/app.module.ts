import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PDFComponent } from './pdf.component';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule
  ],
  declarations: [PDFComponent, PdfViewerComponent],
  bootstrap: [PDFComponent]
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerpustakaanComponent } from './perpustakaan/perpustakaan.component';
import { PerpustakaanAddComponent } from './perpustakaan-add/perpustakaan-add.component';
import { PerpustakaanListComponent } from './perpustakaan-list/perpustakaan-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    PerpustakaanComponent,
    PerpustakaanAddComponent,
    PerpustakaanListComponent,
    HoverHighlightDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

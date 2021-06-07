import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

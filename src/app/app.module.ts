import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MaBibliothequeComponent } from './ma-bibliotheque/ma-bibliotheque.component';
import { CarteLivreComponent } from './ma-bibliotheque/carte-livre/carte-livre.component';
import { BaniereComponent } from './ma-bibliotheque/baniere/baniere.component';
import { TemplateHeroComponent } from './template-hero/template-hero.component';
import { FormHeroComponent } from './template-hero/form-hero/form-hero.component';
import { PlayChapterComponent } from './play-chapter/play-chapter.component';
import { HeroStatComponent } from './play-chapter/hero-stat/hero-stat.component';
import { FoeStatComponent } from './play-chapter/foe-stat/foe-stat.component';
import { HeroInvComponent } from './play-chapter/hero-inv/hero-inv.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    MaBibliothequeComponent,
    CarteLivreComponent,
    BaniereComponent,
    TemplateHeroComponent,
    FormHeroComponent,
    PlayChapterComponent,
    HeroStatComponent,
    FoeStatComponent,
    HeroInvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

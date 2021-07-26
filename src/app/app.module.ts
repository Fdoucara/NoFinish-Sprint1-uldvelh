import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { PageLivresComponent } from './page-livres/page-livres.component';
import { MaBibliothequeComponent } from './ma-bibliotheque/ma-bibliotheque.component';
import { CarteLivreComponent } from './ma-bibliotheque/carte-livre/carte-livre.component';
import { BaniereComponent } from './ma-bibliotheque/baniere/baniere.component';
import { TemplateHeroComponent } from './template-hero/template-hero.component';
import { FormHeroComponent } from './template-hero/form-hero/form-hero.component';
import { PlayChapterComponent } from './play-chapter/play-chapter.component';
import { HeroStatComponent } from './play-chapter/hero-stat/hero-stat.component';
import { FoeStatComponent } from './play-chapter/foe-stat/foe-stat.component';
import { HeroInvComponent } from './play-chapter/hero-inv/hero-inv.component';
import { ChapterComponent } from './play-chapter/chapter/chapter.component';
import { ChapterChoiceComponent } from './play-chapter/chapter-choice/chapter-choice.component';
import { FightConsoleComponent } from './play-chapter/fight-console/fight-console.component';
import { AfterFightChoiceComponent } from './play-chapter/after-fight-choice/after-fight-choice.component';
import { PageAuteursComponent } from './page-auteurs/page-auteurs.component';
import { AutorCardComponent } from './autor-card/autor-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    BookCardComponent,
    PageLivresComponent,
    MaBibliothequeComponent,
    CarteLivreComponent,
    BaniereComponent,
    TemplateHeroComponent,
    FormHeroComponent,
    PlayChapterComponent,
    HeroStatComponent,
    FoeStatComponent,
    HeroInvComponent,
    ChapterComponent,
    ChapterChoiceComponent,
    FightConsoleComponent,
    AfterFightChoiceComponent,
    PageAuteursComponent,
    AutorCardComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

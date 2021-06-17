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
import { ChapterComponent } from './play-chapter/chapter/chapter.component';
import { ChapterChoiceComponent } from './play-chapter/chapter-choice/chapter-choice.component';
import { FightConsoleComponent } from './play-chapter/fight-console/fight-console.component';
import { AfterFightChoiceComponent } from './play-chapter/after-fight-choice/after-fight-choice.component';
import { MyCreationComponent } from './my-creation/my-creation.component';
import { CreationCardComponent } from './my-creation/creation-card/creation-card.component';
import { AuthorHeroTemplateComponent } from './my-creation/author-hero-template/author-hero-template.component';
import { AuthorChapterComponent } from './my-creation/author-chapter/author-chapter.component';
import { BookFormComponent } from './my-creation/book-form/book-form.component';
import { EditTextChapterComponent } from './my-creation/edit-text-chapter/edit-text-chapter.component';


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
    ChapterComponent,
    ChapterChoiceComponent,
    FightConsoleComponent,
    AfterFightChoiceComponent,
    MyCreationComponent,
    CreationCardComponent,
    AuthorHeroTemplateComponent,
    AuthorChapterComponent,
    BookFormComponent,
    EditTextChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

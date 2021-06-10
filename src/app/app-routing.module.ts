import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaBibliothequeComponent } from './ma-bibliotheque/ma-bibliotheque.component';
import { PlayChapterComponent } from './play-chapter/play-chapter.component';
import { FormHeroComponent } from './template-hero/form-hero/form-hero.component';
import { TemplateHeroComponent } from './template-hero/template-hero.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'biblio', component: MaBibliothequeComponent},
    { path: 'templateHero', component: TemplateHeroComponent},
    { path: 'creatHero', component: FormHeroComponent},
    { path: 'playChapter', component: PlayChapterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

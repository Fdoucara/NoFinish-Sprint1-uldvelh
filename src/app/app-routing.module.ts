import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaBibliothequeComponent } from './ma-bibliotheque/ma-bibliotheque.component';
import { AuthorHeroTemplateComponent } from './my-creation/author-hero-template/author-hero-template.component';
import { BookFormComponent } from './my-creation/book-form/book-form.component';
import { EditTextChapterComponent } from './my-creation/edit-text-chapter/edit-text-chapter.component';
import { MyCreationComponent } from './my-creation/my-creation.component';
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
    { path: 'crea', component: MyCreationComponent},
    { path: 'bookForm', component: BookFormComponent},
    { path: 'authorHeroForm', component: AuthorHeroTemplateComponent},
    { path: 'editTextChapter', component: EditTextChapterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

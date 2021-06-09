import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaBibliothequeComponent } from './ma-bibliotheque/ma-bibliotheque.component';
import { TemplateHeroComponent } from './template-hero/template-hero.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'biblio', component: MaBibliothequeComponent},
    { path: 'templateHero', component: TemplateHeroComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

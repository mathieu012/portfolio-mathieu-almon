import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

const routes: Routes = [

  { path: 'accueil', component: AccueilComponent,  data: { animation: 'AccueilPage' }},
  { path: 'skills', component: SkillsComponent, data: { animation: 'SkillsPage' }},
  { path: 'presentation', component: PresentationComponent, data: { animation: 'PresentationPage' }},
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

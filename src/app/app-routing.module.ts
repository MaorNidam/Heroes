import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details/:id", component: HeroDetailsComponent },
  { path: "form", component: HeroFormComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

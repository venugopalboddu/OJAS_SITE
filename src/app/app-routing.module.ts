import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { ClientComponent } from './client/client.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'career', component: CareerComponent},
  {path: 'client', component: ClientComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

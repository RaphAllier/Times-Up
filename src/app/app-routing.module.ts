import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { SetSelectionComponent } from './main-components/set-selection/set-selection.component';
import { HomepageComponent } from './main-components/homepage/homepage.component';
import { TeamSelectionComponent } from './main-components/team-selection/team-selection.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'set-selection', component: SetSelectionComponent},
    {path: 'team-selection', component: TeamSelectionComponent},
    {path: '**', component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
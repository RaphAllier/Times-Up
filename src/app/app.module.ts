import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock-icon/clock-icon.component';
import { ButtonComponent } from './components/button/button.component';
import { HomepageComponent } from './main-components/homepage/homepage.component';
import { SetSelectionComponent } from './main-components/set-selection/set-selection.component';
import { TeamSelectionComponent } from './main-components/team-selection/team-selection.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HomepageComponent,
    SetSelectionComponent,
    ButtonComponent,
    TeamSelectionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

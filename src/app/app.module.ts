import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatRadioModule } from '@angular/material/radio';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { HomeComponent } from './home/home.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';
import { FifthTaskComponent } from './fifth-task/fifth-task.component';
import { RouterModule, Routes } from '@angular/router';
import { CountriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SummaryPipe } from './pipes/summary.pipe';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "first",
    component: FirstTaskComponent
  },
  {
    path: "second",
    component: SecondTaskComponent,

  },
  {
    path: "third",
    component: ThirdTaskComponent,

  },
  {
    path: "fourth",
    component: FourthTaskComponent,
  },
  {
    path: "fifth",
    component: FifthTaskComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomeComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    ThirdTaskComponent,
    FourthTaskComponent,
    FifthTaskComponent,
    SummaryPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,

    BrowserAnimationsModule,

    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

// Custom components
import { AppComponent } from './app.component';
import { navbarComponent } from './navbar/navbar.component';
import {curWeatherComponent} from './current.weather/curweather.component';
import { fdayComponent } from "app/fday.forecast/fday.component";
import { pollutionComponent } from "app/pollution/pollution.component";
import { aboutComponent } from "app/About/about.component";
import { curWeatherService } from "app/current.weather/curweather.service";


@NgModule({
  declarations: [ 
    AppComponent,
    navbarComponent,
    curWeatherComponent,
    fdayComponent,
    pollutionComponent,
    aboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'Current Weather', component:curWeatherComponent},
      {path:'5-Day Forecast', component:fdayComponent},
      {path:'Air Pollution', component:pollutionComponent},
      {path:'About', component:aboutComponent}
    ])
  ],
  providers: [curWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

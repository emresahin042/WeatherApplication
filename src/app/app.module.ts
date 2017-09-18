import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WeatherService } from './weather/weather.service';
import { WeatherComponent } from './weather/weather.component';
import { weatherRouting } from './weather/weather.routing';
import { HeaderComponent } from './header/header.component';
import { SelectCityComponent } from './selectcity/selectcity.component';
import { SelectModule } from "ng2-select";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    SelectCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule,
    weatherRouting,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

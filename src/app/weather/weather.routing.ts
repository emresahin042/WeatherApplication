import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WeatherComponent } from '../weather/weather.component';
import { SelectCityComponent } from '../selectcity/selectcity.component';

const WEATHER_ROUTER:Routes=[
  {path: '', component: SelectCityComponent},
  {path: 'weather', component: WeatherComponent}
]

export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)
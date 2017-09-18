import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { Weather, BaseModel } from '../weather/weather';

@Component({
  selector: 'wp-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  weatherClass: Weather;
  
  constructor(private service: WeatherService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.service.getData().subscribe((vales: Weather) => {
        this.weatherClass = vales;
      });
    }

    back(){
      this.router.navigate(['/']);
    }
}

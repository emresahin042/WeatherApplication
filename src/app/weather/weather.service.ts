import { Component, Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Weather } from './weather';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WeatherService {

  private data: BehaviorSubject<Weather> = new BehaviorSubject(null);

  constructor(private http:Http) { }

  otherWeather(city:string){
    return this.http.get
    (`http://api.openweathermap.org/data/2.5/weather?appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&q=${city}&units=metric&cnt=10`)
    .map((response:Response) => response.json());
    
  
  }
  setData(value: any) {
    this.data.next(value);
  }
  getData(): Observable<any> {
    return this.data.asObservable();
  }
}

export class Weather {
  constructor(
    public cityName: string,
    public temp: string,
    public type: string,
    public tempMin:string,
    public tempMax: string,
    public img: string,
    public speed: string,
    public pressure: string,
    public humidity: string,
  ) { }
}

export interface BaseModel {
  text: string;
}

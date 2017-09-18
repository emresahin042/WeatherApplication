import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { Weather, BaseModel } from '../weather/weather';
import { SelectItem } from 'ng2-select';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wp-selectcity',
  templateUrl: './selectcity.component.html',
  styleUrls: ['./selectcity.component.scss']
})
export class SelectCityComponent implements OnInit {

  constructor(private service: WeatherService, private router: Router, private route: ActivatedRoute) { }

  public items: Array<string> = ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", "AYDIN", "BALIKESİR", "BİLECİKK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR",
    "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "ISPARTA",
    "MERSİN", "İSTANBUL", "İZMİR", "KARS", "KASTAMONU", "KAYSERİ", "KIRKLARELİ", "KIRŞEHİR", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "KAHRAMANMARAŞ", "MARDİN", "MUĞLA", "MUŞ",
    "NEVŞEHİR", "NİĞDE", "ORDU", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "ŞANLIURFA", "UŞAK", "VAN", "YOZGAT", "ZONGULDAK", "AKSARAY",
    "BAYBURT", "KARAMAN", "KIRIKKALE", "BATMAN", "ŞIRNAK", "BARTIN", "ARDAHAN", "IĞDIR", "YALOVA", "KARABüK", "KİLİS", "OSMANİYE", "DÜZCE"];

  public selectedValue: BaseModel;
  value: any = {};
  weatherClass: Weather;
  isDisable: boolean= false;

  ngOnInit() { }

  ngOnDestroy() {
    this.service.setData(this.weatherClass);
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
    this.isDisable = true;
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
    this.isDisable = false;
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  sendCityWeather(value: Array<BaseModel>) {
    this.service.otherWeather(this.value.text).subscribe(
      (data) => {
        this.weatherClass = new Weather(data.name, data.main.temp, data.weather[0].description,
          data.main.temp_min, data.main.temp_max, data.weather[0].icon, data.wind.speed,
          data.main.pressure, data.main.humidity);

        console.log(this.weatherClass);
        this.router.navigate(['/weather']);
      }
    )
  }
}

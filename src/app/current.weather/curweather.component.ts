import {Component} from "@angular/core";
import { curWeatherService } from "app/current.weather/curweather.service";

@Component({
    selector:'cur-weather',
    templateUrl:"./curweather.component.html",
    styleUrls:["./curweather.component.css"],
    providers:[curWeatherService]


})

export class curWeatherComponent {
        constructor(private wDataSvc:curWeatherService){
            this.getData();
        }
        weather:any;
        getData() {
                this.wDataSvc.getData()
                .subscribe(res => {
                    this.weather=res;
                    console.log(res)
                },
                err => {
                    
                })
 }
}
import { LightningElement,track } from 'lwc';
import getWeather from '@salesforce/apex/weatherController.getWeather';
export default class WeatherApp extends LightningElement {
    @track city ='';
    @track temperature = '';
    error;
    onCityChange(event){
        this.city=event.target.value;
    }
    handleClick(event){
        if(this.city != null || this.city !='') {
            getWeather({city : this.city})
            .then(result =>{
                this.temperature = result;
            })
            .catch (error => {
                this.error = error;
            });
        }
        else{
            alert('plz enter the city');
        }
    }
}
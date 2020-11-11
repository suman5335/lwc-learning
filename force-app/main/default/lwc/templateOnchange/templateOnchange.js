import { LightningElement } from 'lwc';

export default class TemplateOnchange extends LightningElement {
    inputText = null ;
   
    changeHandler(event){
        this.inputText = event.target.value;
    }
    get checkText(){
        return this.inputText === "s";

    }

}
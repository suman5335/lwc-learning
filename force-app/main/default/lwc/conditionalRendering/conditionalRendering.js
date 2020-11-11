import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showText = false;
    show(){
        this.showText=true;
    }

}
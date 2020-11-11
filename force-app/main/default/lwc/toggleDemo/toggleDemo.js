import { LightningElement } from 'lwc';

export default class ToggleDemo extends LightningElement {
    toggleText = "true";
    show(){
        this.toggleText = ! this.toggleText
    }
}
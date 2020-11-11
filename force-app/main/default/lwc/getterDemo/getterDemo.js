import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {
    msg = "this is getter demo "
     
    get getmsg(){
        return this.msg.toUpperCase()
    }
    onHandler(){

    }
    offHandler(){
        
    }
}
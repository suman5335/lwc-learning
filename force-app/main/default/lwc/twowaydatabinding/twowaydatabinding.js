import { LightningElement} from 'lwc';

export default class Twowaydatabinding extends LightningElement {
     title =" check here for two way data binding"
    suman(event){
        this.title=event.target.value

    }
    // in latest update thre is no need of track property , wthout track also fun working same ,, from latest sp
    //spring 20 update , no need of using track , nothing wrong in using 
} 
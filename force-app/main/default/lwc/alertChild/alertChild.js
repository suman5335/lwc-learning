import { LightningElement ,api} from 'lwc';

export default class AlertChild extends LightningElement {
    @api message 
    @api className 
    get alertClassName() {
        return this.className ? 'alert ' + this.className : 'alert'
    }
}
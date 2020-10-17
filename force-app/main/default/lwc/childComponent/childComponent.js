import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api messagefromchild ='this is child component value ';
    
}
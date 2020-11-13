import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import defaultTemplate from './renderMultipleDemo.html'

export default class RenderMultipleDemo extends LightningElement {
    selected = null;
    render(){
        return this.selected === 'sign up' ? signupTemplate:
        this.selected ==='sign in'? signinTemplate:
        defaultTemplate
    }
    handler(event){
        this.selected = event.target.label

    }
    submitHandler(event) {
        if (event.target.label === "Sign In") {
          console.log("Login Successfully");
        } else if (event.target.label === "Sign Up") {
          console.log("Sign Up Successfully");
        }
    }
}
import { LightningElement,track } from 'lwc';

export default class ToDoManager extends LightningElement {
    @track time="8:15";
    @track greeting="hey Suman";
    @track todos =[];
    connectedCallback(){
        this.getTime();

        setInterval( () => {
            this.getTime();
            console.log("time reset")
        }, 1000*60)
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time =`${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }
    getHour(hour){
        return hour === 0 ? 12 : hour > 12 ? (hour-12) : hour ;
    }
    getMidDay(hour){
        return hour >= 12 ? "PM":"AM";
    }
    getDoubleDigit(digit){
        return digit<10 ? "0"+digit : digit ;
    }
    setGreeting(hour){
        if(hour<12){
            this.greeting ="Good Morning";
        }else if(hour >= 12 && hour < 17){
            this.greeting="Good Afternoon";
        }else{
            this.greeting="Good Evening";
        }
    }
    addTodoHandler(){
        const inputbox = this.template.querySelector("lightning-input");
        console.log('currently entered text' , inputbox.value);
        const todo = {
            todoId: this.todos.length,
            todoName: inputbox.value,
            done: false,
            todoDate: new Date()
        }
        this.todos.push(todo);
        inputbox.value="";
    }
    updateTodoHandler(){

    }
    deleteTodoHandler(){

    }
    get UpcomingTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) : [];
    }
    get completedTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo => todo.done) : [];
    }
}
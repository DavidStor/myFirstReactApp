import React from 'react';
import ReactDOM from'react-dom';


let dummyData = [{ taskText: "do dishes", completed: false },{ taskText: "Have fun", completed: true }];

class TodoList extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        return (<ul>{dummyData.map((todo) => <Todo task={todo.taskText} state={todo.completed}/>)}</ul>);
    }
}

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
         return (<li><button type="button">X</button> {this.props.state? <strike>{this.props.task}</strike> : this.props.task }</li>);
        //return (<li><button type="button">X</button>{this.props.task}</li>);
    }
}

class InputLine extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<div><input placeholder="task"></input><button type="submit">Add Todo</button></div>);
    }
}

class TodoApp extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<div><InputLine /><TodoList/></div>);
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
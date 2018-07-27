import React from 'react';
import ReactDOM from'react-dom';


class TodoList extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        return (<ul>{this.props.todos.map((todo) => <Todo task={todo.taskText} state={todo.completed}/>)}</ul>);
    }
}

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
         return (<li><button type="button">X</button> 
            {this.props.state? <strike>{this.props.task}</strike> : this.props.task }</li>);
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
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.setState({todos: [{ taskText: "do dishes", completed: false },{ taskText: "Have fun", completed: true }] });
    }

    render() {
        return (<div><InputLine/><TodoList todos={this.state.todos}/></div>);
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
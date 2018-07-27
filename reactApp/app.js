import React from 'react';
import ReactDOM from'react-dom';


let dummyData = ['do dishes', 'clean my room', 'buy some bread', 'call your friend', 'take the dog out for a walk'];

class TodoList extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        return (<ul>{dummyData.map((todo) => <Todo task={todo}/>)}</ul>);
    }
}

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<li>{this.props.task}<button type="button">X</button></li>);
    }
}


ReactDOM.render(<TodoList />, document.getElementById('root'));
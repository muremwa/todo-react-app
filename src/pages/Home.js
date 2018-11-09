import React, { Component } from 'react';
import Todo from "./TodoItem";

import TodoStore from '../stores/TodoStore';
import * as TodoActions from "../actions/TodoActions";


class FormGroupComp extends Component {
    render () {
        return (
            <div className="form-group">
                <input className="form-control" required id={this.props.id} placeholder={this.props.placeHolder} type={this.props.type}/>
            </div>
        )
    }
}


class TodoCreation extends Component {
    createTodo (e) {
        e.preventDefault();
        let title = e.target.children[0].children[0];
        let date = e.target.children[1].children[0]; 
        TodoActions.createTodo(title.value, date.value);
        title.value = "";
        date.value = "";
    }

    render () {
        return (
            <div id="new-todo">
                <h2>Add new Todo</h2>
                <form onSubmit={this.createTodo.bind(this)}>
                    <FormGroupComp id="new-todo-entry" placeHolder="Enter Title Here" type="text"/>
                    <FormGroupComp id="new-todo-title" type="date"/>
                    <button className="btn btn-success" type="submit">create</button>
                </form>
            </div>
        );
    }
}



class Todos extends Component {
    constructor () {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }

    componentWillMount () {
        this.fetchTodos();
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll(),
            })
        })
    }

    addRandomTodo () {
        TodoActions.createTodo("random "+ Math.floor(Math.random() * 100));
    }

    fetchTodos () {
        TodoActions.fetchTodos();
    }

    render() {
        const { todos } = this.state;
        window.todos = todos;
        const Todos = todos.map((todo) => {
            return  <Todo key={todo.id} {...todo}/>
        });

        return (
            <div className="container">
                <h2>all todo items</h2>
                <h4>{Todos.length}</h4>
                <div className="row">
                    <div className="col-md-7">
                        {Todos}
                    </div>
                    <div className="col-md-4">
                        <TodoCreation />
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos;
import React, { Component } from 'react';
import Todo from "./TodoItem";

import TodoStore from '../stores/TodoStore';
import * as TodoActions from "../actions/TodoActions";


class Todos extends Component {
    constructor () {
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }

    componentWillMount () {
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll(),
            })
        })
    }

    addRandomTodo () {
        TodoActions.createTodo("random "+ Math.floor(Math.random() * 100));
    }

    render() {
        const { todos } = this.state;
        window.todos = todos;
        const Todos = todos.map((todo) => {
            return  <Todo key={todo.id} {...todo}/>
        });

        return (
            <div className="container">
                <button className="btn btn-primary" onClick={this.addRandomTodo.bind(this)}>add random todo</button>
                <h2>all todo items</h2>
                <h4>{Todos.length}</h4>
                {Todos}
            </div>
        )
    }
}

export default Todos;
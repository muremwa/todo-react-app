import React, { Component } from 'react';

import * as TodoActions_ from "../actions/TodoActions";

class ToDoHeading extends Component {
    render() {
        return (
            <div className="todo-title">
                <h2>{this.props.todoName}</h2>  
            </div>
        )
    }
}

class TodoDates extends Component {
    render() {
        return (
            <div>
                <p>{this.props.type} {this.props.date}</p>
            </div>
        )
    }
}

class TodoActions extends Component {
    getDone (done) {
        let n;
        if (done) {
            n = "undone";
        } else {
            n = "done";
        }
        return n;
    }

    markDoneOrUndone (e) {
        let id = e.target.parentElement.id;
        TodoActions_.markAsDoneOrUnDone(id);
    }

    deleteTODO (e) {
        let todoID = e.target.parentElement.id;
        TodoActions_.deleteTodo(todoID);
    }

    render() {
        const action = this.getDone(this.props.complete);
        return (
            <div id={this.props.tdId}>
                <span onClick={this.markDoneOrUndone.bind(this)} className="btn btn-link">mark as {action}</span> 
                <span onClick={this.deleteTODO.bind(this)} className="btn btn-link">delete</span>
            </div>
        )
    }
}

class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <ToDoHeading todoName={this.props.title}/>
                <div className="row">
                    <div className="col-sm-4">
                        <TodoDates type="created" date={this.props.createdDate}/>
                    </div>
                    <div className="col-sm-4">
                        <TodoDates type="deadline" date={this.props.doneDate}/>
                    </div>
                </div>
                <TodoActions tdId={this.props.id} complete={this.props.complete} />
            </div>
        )
    }
}

export default Todo;
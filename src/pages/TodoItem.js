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
        let id = e.target.id;
        TodoActions_.markAsDoneOrUnDone(id);
    }

    render() {
        const action = this.getDone(this.props.complete);
        return (
            <div>
                <span onClick={this.markDoneOrUndone.bind(this)} id={this.props.tdId} className="btn btn-link">mark as {action}</span> 
                <span className="btn btn-link">edit</span>
            </div>
        )
    }
}

class Todo extends Component {
    render() {
        return (
            <div className="todo col-md-6">
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
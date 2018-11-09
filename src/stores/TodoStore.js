import { EventEmitter } from "events";
import dispatcher from "../dispatcher";


class TodoStore extends EventEmitter {
    constructor () {
        super();
        this.todos = [];
    }

    createTodo (text) {
        this.emit("change"); 
    }

    getToDo (id) {
        let td;
        td = this.todos.filter (function (todo) {
            return todo.id == id;
        })
        return td[0];
    }

    deleteTodo (id) {
        let td = this.getToDo(id);
        let i = this.todos.indexOf(td);
        this.todos.splice(i, 1);
        this.emit('change');
    }

    markAsDoneORUnDone (id) {
        let td = this.getToDo(id);
        if (td.complete == false) {
            td.complete = true;
        } else {
            td.complete = false;
        }
        this.emit('change');
    }

    getAll () {
        return this.todos;
    }

    
    handleActions (action) {
        switch (action.type) {
            case "CREATE_TODO":
                this.createTodo(action.title);
                break;

            case "MARK":
                this.markAsDoneORUnDone(action.id);
                break;

            case "DELETE_TODO":
                this.deleteTodo(action.id);
                break;

            case "FETCH":
                this.fetchTodos();
                break;

            case "RECEIVE_TODOS":
                this.todos = action.todos;
                this.emit('change');
                break;

            default:
                break;
        }
    }
}

const todostore = new TodoStore;
dispatcher.register(todostore.handleActions.bind(todostore));
window.dispatcher = dispatcher;
export default todostore;
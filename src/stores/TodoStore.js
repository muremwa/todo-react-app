import { EventEmitter } from "events";
import dispatcher from "../dispatcher";


class TodoStore extends EventEmitter {
    constructor () {
        super();
        this.todos =  [
            {
                id: 233,
                title: "hre",
                complete: false,
                createdDate: "12/07/19",
                doneDate: "12/11/20"
            },
            {
                id: 232333,
                title: "Strange",
                complete: true,
                createdDate: "12/07/19",
                doneDate: "12/11/19"
            },
            {
                id: 3233,
                title: "Vick",
                complete: false,
                createdDate: "12/07/19",
                doneDate: "12/11/19"
            },
        ]
    }

    createTodo (text) {
        this.todos.push({
            id: Date.now(),
            title: text,
            complete: false,
            createdDate: "23/24/46",
            doneDate: "23/24/46",
        })
        this.emit("change"); 
    }

    getToDo (id) {
        let td;
        td = this.todos.filter (function (todo) {
            return todo.id == id;
        })
        return td[0];
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

            default:
                break;
        }
    }
}

const todostore = new TodoStore;
dispatcher.register(todostore.handleActions.bind(todostore));
window.dispatcher = dispatcher;
export default todostore;
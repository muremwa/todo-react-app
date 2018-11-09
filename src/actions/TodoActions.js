import dispatcher from '../dispatcher';
import $ from 'jquery';

// typical todo
function typicalTodo (id, title, created, doBy, done) {
    this.id = id;
    this.title = title;
    this.complete = done;
    this.createdDate = created;
    this.doneDate = doBy;
}


export function createTodo (title, doneDate) { 
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/todos/",
        data: {
            "name": title,
            "do_by": doneDate,
        },
        success: function (response) {
            fetchTodos();
        },
        error: function (e) {
            console.log("An error occured", e);
        }
    });
}

export function deleteTodo (id) {
    var actionUrl = "http://127.0.0.1:8000/todoactions/delete/"+id+"/";

    $.ajax({
        type: "POST",
        url: actionUrl,
        success: function (response) {
            console.log(response);
            dispatcher.dispatch({
                type: "DELETE_TODO",
                id: id
            })
        },
        error: function (e) {
            console.log('an error occured', e);
        }
    });
}

export function markAsDoneOrUnDone (id) {
    var actionUrl = "http://127.0.0.1:8000/todoactions/done/"+id+"/";

    $.ajax({
        type: "POST",
        url: actionUrl,
        success: function (response) {
            console.log(response);
            dispatcher.dispatch({
                type: "MARK",
                id: id
            })
        },
        error: function (e) {
            console.log('an error occured', e);
        }
    });
}

export function fetchTodos () {
    let list = new Array();
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/todos/",
        crossDomain: true,
        success: function (response) {
            list = response;
            let dis = newTodos(list);
            dispatcher.dispatch({
                type: "RECEIVE_TODOS",
                todos: dis
            });
        },
        error: function (e) {
            console.log("An error occured", e);
        }
    });
}

function newTodos (objs) {
    var results = new Array();
    for (let i=0; i<objs.length; i++) {
        let obj = objs[i];
        let todo = new typicalTodo(obj.id, obj.name, obj.created, obj.do_by, obj.done);
        results.push(todo);
    }
    return results;
}
import dispatcher from '../dispatcher';

export function createTodo (title) { 
    dispatcher.dispatch ( {
        type: "CREATE_TODO",
        title,
    })
}

export function deleteTodo (id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    })
}

export function markAsDoneOrUnDone (id) {
    dispatcher.dispatch( {
        type: "MARK",
        id,
    })
}
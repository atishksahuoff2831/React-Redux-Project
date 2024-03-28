//Step - 01 = Define Actions
export const AddToDo = (data) => {
    return {
        type: "ADDTODO",
        payload: {
            id: Math.random(),
            data: data,
        }
    }
}
export const DeleteToDo = (id) => {
    return {
        type: "DELETETODO",
        id
    }
}
export const EditToDo = (id, data) => {
    return {
        type: "EDITTODO",
        payload: {
            id: id,
            data: data,
        }
    }
}
export const RemoveToDo = () => {
    return{
        type: "REMOVETODO"
    }
}
import React, { useState } from "react";
import { AddToDo, DeleteToDo, EditToDo, RemoveToDo } from "../Actions/Action";
import { useSelector, useDispatch } from "react-redux";
import '../Components/Todo.css';
const Todo = () => {
    const [inputdata, Setinputdata] = useState("");
    const [editId, SeteditId] = useState(null);
    const list = useSelector((state) => state.Reducer.list)
    const Dispatch = useDispatch();
    const handleEdit = (id) => {
        const data = list.find((ele) => ele.id === id).data;
        Setinputdata(data);
        SeteditId(id);
    }
    const handleAdd = () => {
        if (inputdata.trim() === "") {
            alert("Please fill the correct data");
            return;
        }
        if (editId) {
            Dispatch(EditToDo(editId, inputdata));
            SeteditId(null);
        } else {
            Dispatch(AddToDo(inputdata), Setinputdata(""));
        }
    }
    return (
        <>
            <div className="TODOH">
                <h1 className="TDH">To-Do List Using Redux</h1></div>
            <div className="TODOI">
                <input
                    type='text'
                    placeholder='Add To-Do'
                    value={inputdata}
                    className="INP"
                    onChange={(e) => Setinputdata(e.target.value)}
                />
                <button onClick={handleAdd} className="BTNA BTN AA">Add</button>
            </div>
            <div className="TODOL">
                {
                    list.map(ele => (
                        <div key={ele.id} className="TODOL1">
                            <p>{ele.data}</p>
                            <button className="BTN ONE" onClick={() => Dispatch(DeleteToDo(ele.id))}>X</button>
                            <button className="BTN TWO" onClick={() => handleEdit(ele.id)}>E</button>
                        </div>
                    ))
                }
            </div>
            <div className="BTNBX">
                <button className="BTN THR" onClick={() => Dispatch(RemoveToDo())}>X</button>
            </div>
        </>
    );
}
export default Todo;
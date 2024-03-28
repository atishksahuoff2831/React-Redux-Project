import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue } from "../Redux/Actions1";

const Compo1 = () => {
    const dispatch = useDispatch();

    const add = () => {
        dispatch(increment());
    };

    const add1 = () => {
        dispatch(incrementByValue(5));
    };

    const sub = () => {
        dispatch(decrement());
    };

    const value = useSelector(state => state.INC_DEC.count);

    return (
        <>
            <div style={{ background: "red" }}>
                Component1
                <button onClick={add}>+</button>
                <button onClick={add1}>+?</button>
                <button onClick={sub}>-</button>
                <p>{value}</p>
            </div>
        </>
    );
};

export default Compo1;

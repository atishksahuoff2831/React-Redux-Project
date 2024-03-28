import { createStore, combineReducers } from "redux";
import { INC_DEC } from "./Reducers2";

const rootReducer = combineReducers({
    INC_DEC,
});

const Store3 = createStore(rootReducer);

export default Store3;

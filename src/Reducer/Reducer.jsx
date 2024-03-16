//Step - 02
const initialData = {
    list: []
}
const Reducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADDTODO":
            const { id, data } = action.payload;
            return {
                ...state, list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETETODO":
            const newList = state.list.filter((ele) => ele.id !== action.id);
            return {
                ...state,
                list: newList
            }
        case "EDITTODO":
            const updatedList = state.list.map((ele) => {
                if (ele.id === action.payload.id) {
                    return {
                        ...ele,
                        data: action.payload.data,
                    }
                }
                return ele;
            });
            return {
                ...state,
                list: updatedList,
            }
        case "REMOVETODO":
            return {
                ...state,
                list: []
            }

        default: return state;
    }
}
export default Reducer;
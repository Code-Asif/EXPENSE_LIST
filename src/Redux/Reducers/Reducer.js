const initalState = {
    expenseList: []
}


export const MAIN_REDUCER = (state = initalState, { type, data }) => {
    switch (type) {
        case "ADD_EXPENSE":
            return {
                ...state, expenseList: [...state.expenseList, data]
            }



        default:
            return state;
    }
}
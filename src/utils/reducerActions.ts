const reducerActions = (state: number, action: { type: string, payload: number }) => {
    switch (action.type) {
        case 'inc':
            return state + action.payload;
        case 'dec':
            return state - action.payload;
        default : return state
    }
}

export default reducerActions;
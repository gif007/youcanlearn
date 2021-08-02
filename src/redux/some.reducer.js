const INITIAL_STATE = {
    'some': 'state'
}

const someReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '':
        return {
            ...state,
            'some': action.payload
        }
        default:
            return state;
    }
}

export default someReducer;
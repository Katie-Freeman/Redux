
const initialState = {
    counter: 99,
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }else if(action.type === 'DECREMENT') {
        return{
            ...state,
            counter: state.counter - 1
        }
    }else if(action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
}

export default reducer
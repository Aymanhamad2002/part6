import deepFreeze from "deep-freeze";
import filterReducer from "./filterReducer";

describe('filterReducer',() => {
    test(' a new state is returned after FILTER_ACTION',() => {
        const state = ''
        const action = {
            type: 'filter/handleFilter',
            payload:'ss'
        }
        deepFreeze(state)
        
        const newState = filterReducer (state,action)
        expect(newState).toEqual('ss')
    })
})
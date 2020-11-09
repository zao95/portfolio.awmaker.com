
const groupReducer = {
    TEST_ACTION: (state, action) => (
        Object.assign(
            {},
            state,
            {
                mine: action.payload.groupList,
                fetchSuccess: true,
            }
        )
    )
}

const reducer = (state = {}, action) => {
    if(groupReducer[action.type] === undefined) {
        return state
    }
    else {
        return groupReducer[action.type](state, action)
    }
}

export default reducer
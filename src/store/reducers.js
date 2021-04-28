const COMBINE_DATA = "COMBINE_DATA"
const SEARCH_VALUE = "SEARCH_VALUE"

const defaultState = {
    postsData: [],
    searchValue: ''
}

export default function reducers(state = defaultState, action) {
    switch (action.type) {
        case COMBINE_DATA:
            const newData = action.payload[0].data.map((item, row) => {
                const found = action.payload[1].data.find((element) => item.userId == element.id);
                return { ...item, ...found, myId: row };
            });
            return { ...state, postsData: newData }
        case SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        default:
            return state
    }
}

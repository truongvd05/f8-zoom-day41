import { SHOW_LOADING, HIDE_LOADING } from "./constants";

const init = {
    isLoading: false,
};

function reducer(state = init, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}

export default reducer;

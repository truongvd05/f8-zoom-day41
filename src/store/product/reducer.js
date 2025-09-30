import {
    DELETE_LIST,
    GET_LIST,
    PATCH_LIST,
    SET_DETAIL,
    SET_LIST,
} from "./constants";

const init = {
    list: [],
    detail: null,
};

function productReducer(state = init, action) {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                list: action.payload,
            };
        case GET_LIST:
            return state;
        case PATCH_LIST:
            return {
                ...state,
                list: state.list.map((item) => {
                    return item.id === action.payload.id
                        ? { ...item, ...payload }
                        : item;
                }),
            };
        case DELETE_LIST:
            return {
                ...state,
                list: state.list.filter((item) => {
                    return item.id !== action.payload.id;
                }),
            };
        case SET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        default:
            return state;
    }
}

export default productReducer;

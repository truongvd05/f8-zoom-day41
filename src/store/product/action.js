import http from "@/utils/http";
import { GET_LIST, SET_DETAIL, SET_LIST } from "./constants";
import { HIDE_LOADING, SHOW_LOADING } from "../ui/constants";
import { hideLoading, showLoading } from "../ui/action";
export const setlist = (payload) => {
    return {
        type: SET_LIST,
        payload,
    };
};

export const getlist = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SHOW_LOADING,
            });
            const res = await http.get("/products");
            dispatch(setlist(res.data.items));
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({
                type: HIDE_LOADING,
            });
        }
    };
};

const setDetail = (payload) => ({
    type: SET_DETAIL,
    payload,
});

export const getDetail = (payload) => {
    console.log(payload);

    return async (dispatch) => {
        try {
            dispatch(showLoading());
            const res = await http.get(`/products/${payload}`);
            console.log(res);

            dispatch(setDetail(res.data));
        } catch (err) {
            console.log(err);
        } finally {
            dispatch(hideLoading());
        }
    };
};

const productAction = { setlist, getlist, setDetail, getDetail };

export default productAction;

import { HIDE_LOADING, SHOW_LOADING } from "./constants";

export const showLoading = (payload) => ({
    type: SHOW_LOADING,
    payload,
});

export const hideLoading = (payload) => ({
    type: HIDE_LOADING,
    payload,
});

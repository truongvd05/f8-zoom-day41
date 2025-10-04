import axios from "axios";
import { data } from "react-router";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

const _send = async (method, path, data, config) => {
    try {
        const response = await httpClient.request({
            ...config,
            method,
            url: path,
            data,
        });
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const get = async (pathname, config) => {
    return await _send("get", pathname, config);
};

const post = async (pathname, data, config) => {
    return await _send("get", pathname, config);
};

const put = async (pathname, data, config) => {
    return await _send("get", pathname, config);
};

const patch = async (pathname, data, config) => {
    return await _send("get", pathname, config);
};

const del = async (pathname, config) => {
    return await _send("get", pathname, config);
};

const http = { get, post, put, patch, del };

export default http;

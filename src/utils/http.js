import axios from "axios";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

const get = async (pathname, config) => {
    const res = await httpClient.get(pathname, config);
    return res.data;
};

const post = async (pathname, data, config) => {
    const res = await httpClient.post(pathname, data, config);
    return res.data;
};

const put = async (pathname, data, config) => {
    const res = await httpClient.put(pathname, data, config);
    return res.data;
};

const patch = async (pathname, data, config) => {
    const res = await httpClient.patch(pathname, data, config);
    return res.data;
};

const del = async (pathname, data, config) => {
    const res = await httpClient.del(pathname, config);
    return res.data;
};

const http = { get, post, put, patch, del };

export default http;

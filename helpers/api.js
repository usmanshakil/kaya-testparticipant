import { authHeader } from "./auth-header";
import axios from "axios";

export const api = {
    postApi,
    getApi,
    updateApi,
    deleteApi,
    putApi
};
function getApi(url) {
    const requestOptions = {
        method: "GET",
        headers: authHeader(),
        url: url
    };
    return axios(requestOptions).then(handleResponse);
}

async function updateApi(url, payload) {
    const requestOptions = {
        method: "PUT",
        headers: {
            ...await authHeader(),
            "Content-Type": "application/json"
        },
        url: url,
        data: payload
    };
    return axios(requestOptions).then(handleResponse);
}

async function deleteApi(url) {
    const requestOptions = {
        method: "DELETE",
        headers: await authHeader()
    };
    return axios
        .delete(url, requestOptions)
        .then(handleResponse);
}

async function postApi(url, payload, customHeaders) {
    let headers = customHeaders
        ? customHeaders
        : {
            ...await authHeader(),
            "Content-Type": "application/json"
        };
    const requestOptions = {
        method: "POST",
        url: url,
        headers: headers,
        data: payload
    };
    return axios(requestOptions).then(handleResponse);
}

async function putApi(url, payload, customHeaders) {
    let headers = customHeaders
        ? customHeaders
        : {
            ...await authHeader(),
            "Content-Type": "application/json"
        };
    const requestOptions = {
        method: "PUT",
        url: url,
        headers: headers,
        data: payload
    };
    return axios(requestOptions).then(handleResponse);
}
function handleResponse(response) {
    const data = response.data;
    if (!response.statusText === "OK") {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
        }

        const error = data || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

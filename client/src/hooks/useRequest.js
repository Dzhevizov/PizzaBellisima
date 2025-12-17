import { useEffect, useState } from "react";

// useRequest.js
const baseUrl = 'http://localhost:3030';

export default function useRequest(url, initialState) {
    const [data, setData] = useState(initialState);

    const request = async (url, method, data, config = {}) => {
        let options = {};

        if (method) options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };
            options.body = JSON.stringify(data);
        }

        if (config.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken,
            };
        }

        const response = await fetch(`${baseUrl}${url}`, options);

        if (!response.ok) {
            throw response.statusText;
        }

        if (response.status === 204) {
            return {};
        }

        return await response.json();
    };

    useEffect(() => {
        if (!url) return;
        request(url)
            .then(result => setData(result))
            .catch(err => alert(err));
    }, [url]);

    return { request, data, setData };
}

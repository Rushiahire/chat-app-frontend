import axios from 'axios';

export const callGetAPI = async (url: string, cookie: any) => {
    let response: any;

    const API_CONFIG = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${cookie}`,
        },
    };

    await axios
        .get(`${url}`, {
            ...API_CONFIG,
            timeout: 5000,
        })
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
            if (err.code === 'ECONNABORTED') {
                return 'Request timed out';
            } else if (err.code === 'ERR_BAD_REQUEST') {
                return 'Bad Request';
            } else if (err.code === 'ERR_INVALID_URL') {
                return 'Invalid URL';
            } else {
                return err.message || 'An unknown error occurred';
            }
        });

    return response;
};


export const callPostAPI = async (url: string, body: any, token: any) => {
    let response: any;
    const API_CONFIG = {
        headers: {
            Authorization: token,
        },
    };
    await axios
        .post(url, body, {
            ...API_CONFIG,
            timeout: 5000,
        })
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
            if (err.code === 'ECONNABORTED') {
                response = 'Request timed out';
            } else if (err.code === 'ERR_BAD_REQUEST') {
                response = 'Bad Request';
            } else if (err.code === 'ERR_INVALID_URL') {
                response = 'Invalid URL';
            } else {
                response = err;
            }
        });
    return response;
}
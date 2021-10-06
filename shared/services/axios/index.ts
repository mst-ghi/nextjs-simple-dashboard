import axios from 'axios';

export const baseURL = 'http://api.mediastack.com/';
export const apiKey = `access_key=30b909e0caf8bcd6ef7e4127366117c5`;

export const http = axios.create({
    baseURL,
});

export const httpGet = async (url: string) => {
    try {
        return await axios.get(gUrl(url));
    } catch (error) {
        throw error;
    }
};

function gUrl(url: string) {
    let key = `?${apiKey}`;
    if (url.includes('?')) {
        key = key.replace('?', '&');
    }
    return baseURL + url + key;
}

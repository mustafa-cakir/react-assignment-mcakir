import axios from 'axios';
import { BASE_API_URL } from '../constants';

export const fetchService = axios.create({
    baseURL: BASE_API_URL,
});

// Alternatively, fetch() can be used as follows;

// return fetch(BASE_API_URL + api, {
//     headers: {
//         "Content-Type": "application/json",
//     },
// }).then(async res => {
//     if (res.ok) return res.json();
//     return res.text().then(text => {
//         throw new Error(text);
//     });
// });

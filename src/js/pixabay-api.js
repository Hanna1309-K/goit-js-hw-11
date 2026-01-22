

import axios from 'axios';

const API_KEY = '54320927-5ca4d41cc3ecb718a2e32b522';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });

    return response.data;
}

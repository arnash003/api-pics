import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID 9fQcbVCfq8zkFV0H3O7CgZv98cp9XwyntsaP9Qt1nxM'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;
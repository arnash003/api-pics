import axios from "axios";

const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID 9fQcbVCfq8zkFV0H3O7CgZv98cp9XwyntsaP9Qt1nxM'
        },
        params: {
            query: 'cars'
        }
    });
    console.log(response);
    return response;
};

export default searchImages;
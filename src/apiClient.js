import axios from "axios";

export const getFoto = async (search, page) => {
          
    const key ='34860459-58caa0f812cc249544584c986';
    const q = search;
    const image_type = "photo";
    const orientation = "horizontal";
    const safesearch = "true";
    const per__page = 40;        
    
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?key=${key}&q=${q}&image_type=${image_type}&orientation=
            ${orientation}&safesearch=${safesearch}&per_page=${per__page}&page=${page}`);
        
        if (!response.status === 200) {
            throw new Error(response.status);
        }        
        return response;
    } 
    catch (error) {
        console.error(error);
    }

};

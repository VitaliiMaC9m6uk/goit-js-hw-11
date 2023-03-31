const API_KEY = '34860459-58caa0f812cc249544584c986';

export const getFoto = async (search,page) => {
          
    const key = process.env.PIXABAY_API_KEY;
    const q = search;
    const image_type = "photo";
    const orientation = "horizontal";
    const safesearch = "true";
    const per__page = 40; 
    page;
    // pageSize: 10,
          
    
    try {
        const response = await fetch(
            `https://pixabay.com/api/?key=${key}&q=${q}&image_type=${image_type}&orientation=
            ${orientation}&safesearch=${safesearch}&per_page=${per__page}&page=${page}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch (e) {
        console.error(e);
    }

};

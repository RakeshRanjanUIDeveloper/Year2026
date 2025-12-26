import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID yS31-jBBYE3TzjtbwFSwTtj2tgCdZaUv0QjuKi4cPxQ'
        },
        params:{
            query: term
        }
    })
    return response.data.results 
}

export default searchImages;
import yelp from '../api/yelp';
import { useState, useEffect } from "react";

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 10,
                    term: searchTerm,
                    location: 'Paris'
                }
            });
            setResults(response.data.businesses)
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Something went wrong')
            setResults([])
        }
        
    };

    //Pour la recherche à l'arrivée sur l'écran
    useEffect(() => {
        searchApi('Pizza');
      }, []);

      return [searchApi,results,errorMessage]
};
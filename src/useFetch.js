// custom hook 

import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null });
    
    useEffect(() => {
        /*
        // Promises syntex
        fetch(url)
            .then(response => response.text())
            .then(data => {
                setState({ data: data, loading: true });
            });
        */

        // Async Await syntax
        const fetchData = async () => {
            const response = await fetch(url);
            const incomingData = await response.text();

            setState({ data: incomingData });
        }
        fetchData();
    }, [url, setState]);
        
    return state;
}

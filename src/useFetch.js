// custom hook 

import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });
    
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
            const data = await response.text();

            setState({ data: data, loading: true });
        }
        fetchData();
    });
        
    return state;
}

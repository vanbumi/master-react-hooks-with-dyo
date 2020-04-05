import { useState, useEffect } from 'react';

// Create custom hooks here
export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setResult(json)); 
    },[]);

    return result;
}
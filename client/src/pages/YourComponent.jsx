import React, { useState, useEffect } from 'react';

const YourComponent = () => {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        fetchApi(); // Call the function to fetch the API key
    }, []);

    async function fetchApi() {
        try {
            const response = await fetch("http://localhost:8080/api/v1/dalle/");
            const data = await response.json();
            const apiKey = data.apiKey;
            setApiKey(apiKey); // Update the state with the fetched API key
        } catch (error) {
            console.error('Error fetching API Key:', error);
        }
    }

    return (
        <div>
            <h2>Fetched API Key:</h2>
            <p></p>
        </div>
    );
};as

export default YourComponent







import React from 'react';
import { useFetch } from './hooks';


function Joke() {
    //const joke = useFetch('https://official-joke-api.appspot.com/jokes/random', {});

    // or 

    const {setup, punchline} = useFetch('https://official-joke-api.appspot.com/jokes/random', {});
    
    return (
        
        <div>
            <h3>Joke of the day</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;

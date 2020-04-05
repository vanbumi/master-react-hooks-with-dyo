import React, { useState, useEffect } from 'react';

function Stories () {
    const [stories, setStory] = useState([]);

    useEffect(() => {
        fetch('https://news-proxy-server.appspot.com/topstories')
            .then(response => response.json())
            .then(json => {
                //console.log('Stories', json);
                setStory(json);
            }, []);
    });

    return (
        <div className='Stories'>
            <h3>Stories</h3>
            {
                stories.map(story => {
                    const { id, by, time, title, url } = story

                    return (
                        <div key={id}>
                            <h3><a href={url}>{title}</a></h3>
                    <div>{by} - {new Date(time * 1000).toLocaleString()}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stories; 
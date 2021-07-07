import React, { useState, useEffect } from 'react'
import Card from '../Card/card'
import usePhoto from '../../hooks/usePhoto'

export default function List() {

    const [posts, setPosts] = useState([{}, {}, {}, {}])
    const [loading, setLoading] = useState(true)
    

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        // if (loading)
        // return

        if (scrollHeight - scrollTop - 1 <= clientHeight) {
            loadPosts();
            console.log('chegou')
            setLoading(true);
        }
    };
    
    const loadPosts = () => {
        
        var postsArray = posts.concat([{}]);

        setLoading(false);

        console.log('chegou aqui')

        setPosts(postsArray)



    };

    return (
        <div className="container" onScroll={(event) => handleScroll(event)}>
            <ul >
                {posts.map((el, k) => {
                    return (
                        <li key={k}>
                            <Card />
                        </li>
                    )
                })}
            </ul>
            {loading && <h4>Loading ...</h4>}
        </div>
    )
}
import { useState, useEffect } from 'react';

export const useFetch = (url, user) => {

    const [posts, setPosts] = useState([]);
    const [postsAreLoading, setPostAreloading] = useState(false);

    const grabPosts = async () => {
        console.log("Running fetch all posts")
        try { // /posts/all
            setPostAreloading(true)
            let res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                query: JSON.stringify({
                    user: user.name,
                    message: user.message,
                    userid: user.userid
                })
            })

            let result = await res.json();
            console.log(result.posts)
            setPosts(result.posts)
            setPostAreloading(false)
        }

        catch (e) {
            console.log(e)
            setPostAreloading(false)
        }
    }

    useEffect(() => {
        grabPosts();
    }, [posts]);

    return { posts, postsAreLoading }
}
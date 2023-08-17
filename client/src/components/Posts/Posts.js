import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Posts';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
       <>
        <h1> Posts</h1>
       
        <Post />
        <Post />
        </>
        
    );
}

export default Posts;
import {  createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
    postList :[],
    addPost : () =>{},
    deletedPost : () =>{}
});



const postListReducer =(currPostList, action) => {
    let newPostlist = currPostList;
    if(action.type === 'DELETE_POST') {
        newPostlist = currPostList.filter(
            (post) => post.id !== action.payload.postId
        )
    } else if (action.type === "ADD_INITIAL_POST") {
        newPostlist = action.payload.posts;
    } else if (action.type === "ADD_POST") {
        newPostlist = [action.payload, ...currPostList]
    }

    return newPostlist;
}
const PostListeProvider = ({ children }) =>{
    const [postList, dispatchPostList] =useReducer(postListReducer,[]);
    

    const addPost =(post) =>{
        dispatchPostList({
            type:"ADD_POST",
            payload:post,
        })

    }

    const addInitialPosts =(posts) =>{
        dispatchPostList({
            type:"ADD_INITIAL_POST",
            payload:{
                posts
            }
        })

    }

    const deletedPost = (postId) =>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId,
            }
        })
    }



    return (
    <PostList.Provider value={{ postList, addPost,  deletedPost }} >
        {children}
    </PostList.Provider>
    )
}

export default PostListeProvider;
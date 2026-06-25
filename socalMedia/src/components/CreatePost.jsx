import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
   // const {addPost} = useContext(PostList);




    return(
        <Form method="POST" className="create-post" >
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input 
                type="text" 
                name="title"
                className="form-control" 
                id="title"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea 
                type="text" 
                name="body"
                rows="4" 
                className="form-control" 
                id="body"/>
                
            </div>

            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter User Id</label>
                <input 
                type="text" 
                name="userId"
                className="form-control" 
                id="userId"/>
                
            </div>

            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Your Reactions</label>
                <input 
                type="text" 
                name="reaction"
                className="form-control" 
                id="reaction"/>
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Your Tags</label>
                <input 
                type="text" 
                name="tags"
                className="form-control" 
                id="tags"/>
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </Form>

    );
}

export async function createPostAction(data) {
    const formData = await data.request.formData();
    const  postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    console.log(postData);

    fetch('https://dummyjson.com/posts/add', { 
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(postData),
    })
        .then(res => res.json())
        .then((post) => {
            console.log(post)
        })

    return redirect("/");

}
export default CreatePost;
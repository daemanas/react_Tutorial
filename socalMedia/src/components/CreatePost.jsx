import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const {addPost} = useContext(PostList);
    const navigate = useNavigate();



    const titleElement = useRef();
    const bodyElement = useRef();
    const userIdElement = useRef();
    const reactionElement = useRef();
    const tagsElement = useRef();
    const handelSubmit = (event) =>{
        event.preventDefault();
        const title = titleElement.current.value;
        const body = bodyElement.current.value;
        const userId = userIdElement.current.value;
        const reaction = reactionElement.current.value;
        const tags = tagsElement.current.value.split("")
        // addPost(title, body, userId, reaction, tags);

        titleElement.current.value="";
        bodyElement.current.value="";
        userIdElement.current.value="";
        reactionElement.current.value="";
        tagsElement.current.value="";

        fetch('https://dummyjson.com/posts/add', { 
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                title:title,
                body:body,
                reaction:reaction,
                userId:userId,
                tags:tags
            })
        })
            .then(res => res.json())
            
            .then((post) => {
                console.log(post)
                addPost(post);
                navigate("/");
            })
            
    }

    return(
        <form className="create-post" onSubmit={handelSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={titleElement} className="form-control" id="title"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" ref={bodyElement} rows="4" className="form-control" id="body"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter User Id</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Your Reactions</label>
                <input type="text" ref={reactionElement} className="form-control" id="reaction"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Your Tags</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags"/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>

    );
}

export default CreatePost;
import { useContext } from "react";
import {PostList} from "../store/post-list-store";

const Post = ({post}) =>{
    const {deletedPost} = useContext(PostList);
    return(
        <div className="card post-card" style={{width:"30rem"}}>
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={() => deletedPost(post.id)} >
                        DE
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag)=> (
                    <span key={tag} className="badge text-bg-primary hastag">{tag}</span>
                ))}
                <div className="alert alert-success" role="alert">
                    A simple post
                </div>
            </div>
        </div>
    );
}

export default Post;
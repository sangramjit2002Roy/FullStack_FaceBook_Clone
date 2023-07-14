import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";




export default function Posts({ post }) {

    const [like, setLike] = useState(post.likes.length);
    const [isLike, setIsLike] = useState(false);
    const [user, setUser] = useState({});
    const Public_Folder_9_54mins = process.env.REACT_APP_PUBLIC_FOLDER;
    //use this user as current user
    const {user:currentUser} = useContext(AuthContext);


    useEffect(() => {
      //eii useEffect hook ta diye Check korchi je post taa amar already liked kora achey kina
      //1:53:51 3rd video

      setIsLike(post.likes.includes(currentUser._id));
    
      
    }, [currentUser._id, post.likes]);
    


    useEffect(() => {
        //eii useEffect hook taa diye post like and dislike korchi
        const fetchUser = async () => {

            const res = await axios.get(`/users/?userId=${post.userId}`);

            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);



    const likeHandler = () => {
        try {
            axios.put("/posts/"+post._id+"/like", { userId: currentUser._id });//1:52:33 3rd video
        } catch (err) {
            
        }
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike);
        // setIsLike(isLike ? false : true);
    }


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            {/* <img src={Users.filter((u) => {
                            return u.id === post.userId;
                        })[0].profilePicture} alt="" className="postProfileImg" /> */}
                            <img src={user.profilePicture ? Public_Folder_9_54mins + user.profilePicture : Public_Folder_9_54mins + "person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        {/* <span className="postUsername">{Users.filter((u) => {
                            return u.id === post.userId;
                        })[0].username}</span> */}
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={Public_Folder_9_54mins + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${Public_Folder_9_54mins}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" onClick={likeHandler} src={`${Public_Folder_9_54mins}heart.png`} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>

            </div>
        </div>
    )
}


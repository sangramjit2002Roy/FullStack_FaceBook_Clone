import { useContext, useEffect, useState } from "react";
import Post from "../posts/Posts";
import Share from "../share/Share";
import "./feed.css";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {

  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {//23:00_3rd_video
    const fetchPosts = async () => {

      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);

      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  }, [username, user._id]);



  return (
    <div className="feed">
      <div className="feedWrapper">
      {(!username || username === user.username) && <Share />}

        {posts.map((p) => (
          <Post key={p._id} post={p} />//map err vitor erom type err syntax holey ekta unique key ditey hoy.
        ))}
      </div>
    </div>
  );
} 
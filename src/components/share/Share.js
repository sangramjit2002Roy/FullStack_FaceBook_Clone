import "./share.css";
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel,
} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <Link to={`/profile/${user.username}`}>
                        <img
                            className="shareProfileImg"
                            src={
                                user.profilePicture
                                    ? user.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                        />
                    </Link>
                    <input
                        placeholder={"What's in your mind " + user.username + "?"}
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr" />
                {file && (
                    // src={URL.createObjectURL(file)} //It allows us to create some sudo url to see our files before uploading
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
            // import "./share.css";
            // import { EmojiEmotionsOutlined, LabelOutlined, PermMediaOutlined, RoomOutlined } from "@mui/icons-material";
            // import { useContext, useRef, useState } from "react";
            // import { AuthContext } from '../../context/AuthContext';
            // import { Link } from "react-router-dom";
            // import { axios } from "axios";
            
            // export default function Share() {
            
            //     const { user } = useContext(AuthContext);
            //     const PF = process.env.REACT_APP_PUBLIC_FOLDER;
            //     const desc = useRef();
            //     const [file, setFile] = useState(null);
            
            //     const submitHandler = async (e) => {
            //         e.preventDefault();
            //         const newPost = {
            //             userId: user._id,
            //             desc: desc.current.value,   
            //         };
            //         //jodi notun file select kore upload kore thake, tahole eii if() ta run korbey
            //         if (file) {//2:19:23 3rd video
            //             const data = new FormData();
            //             const fileName = Date.now() + file.name;
            //             data.append("name", fileName);
            //             data.append("file", file);
            //             newPost.img = fileName;
            //             console.log(newPost); 
            //             try {
            //                 await axios.post("/upload", data);
            //             } catch (err) {
            //                 console.log(err);
            //             }
            //         }
            
            //         try {
            //             await axios.post("/posts", newPost);
            //         } catch (err) {
            //             console.log(err);
            //         }
            //     }
            
            
            
            
            
            
            //     return (
            //         <div className="share">
            //             <div className="shareWrapper">
            //                 <div className="shareTop">
            //                     <Link to={`/profile/${user.username}`}>
            //                         <img className="shareProfileImg" src={
            //                             user.profilePicture
            //                                 ? user.profilePicture
            //                                 : PF + "person/noAvatar.png"
            //                         } alt="" />
            //                     </Link>
            //                     <input
            //                         placeholder={"What's in your mind " + user.username + " ?"}
            //                         className="shareInput"
            //                         ref={desc}
            //                     />
            //                 </div>
            //                 <hr className="shareHr" />
            //                 <form className="shareBottom" onSubmit={submitHandler} >
            //                     <div className="shareOptions">
            //                         <label htmlFor="file" /* label tag use korley htmlFor ee id ditey hoy 2:00:00 3rd video */ className="shareOption">
            //                             <PermMediaOutlined htmlColor="tomato" className="shareIcon" />
            //                             <span className="shareOptionText">Photo or Video</span>
            //                             <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
            //                         </label>
            //                         <div className="shareOption">
            //                             <LabelOutlined htmlColor="blue" className="shareIcon" />
            //                             <span className="shareOptionText">Tag</span>
            //                         </div>
            //                         <div className="shareOption">
            //                             <RoomOutlined htmlColor="green" className="shareIcon" />
            //                             <span className="shareOptionText">Location</span>
            //                         </div>
            //                         <div className="shareOption">
            //                             <EmojiEmotionsOutlined htmlColor="goldenrod" className="shareIcon" />
            //                             <span className="shareOptionText">Feelings</span>
            //                         </div>
            //                     </div>
            //                     <button className="shareButton" type="submit">Share</button>
            //                 </form>
            //             </div>
            //         </div>
            //     );
            // }
            
}
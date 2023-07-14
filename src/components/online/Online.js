import "./online.css"

export default function Online({ user }) {

    const Public_Folder_9_54mins = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={Public_Folder_9_54mins+user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

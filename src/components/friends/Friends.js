import "./friends.css";

export default function CloseFriend({user}) {

  const Public_Folder_9_54mins = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={Public_Folder_9_54mins+user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
import { useState } from "react";
import "./SearchSuggest.css";
import Spinner from "../Spinner/Spinner";

function SearchSuggest({
  avatar = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  username = "john-doe",
}) {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  return (
    <div className="searchsuggest">
      <img
        className="avatar"
        src={avatar}
        onLoad={() => setAvatarLoaded(true)}
      />
      {!avatarLoaded && <Spinner />}

      <div className="username">{username}</div>
    </div>
  );
}

export default SearchSuggest;

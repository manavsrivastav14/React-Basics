import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return !user ? <div>Please Login</div> : <div>Welcome {user.username}</div>;
}

export default Profile;

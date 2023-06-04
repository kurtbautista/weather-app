import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";

const Profile = (props) => {
  const { user } = useAuth0();
  return (
    <>
      <Typography variant="h4">{user.name}</Typography>
      <Typography variant="h5">{user.email}</Typography>
      <a
        href={`https://github.com/${user.nickname}`}
      >{`https://github.com/${user.nickname}`}</a>
    </>
  );
};

Profile.propTypes = {};

export default Profile;

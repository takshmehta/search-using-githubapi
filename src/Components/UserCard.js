import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img alt="" src={user.avatar_url} className="img_thumbnail" />
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.email}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-primary">Public repos: {user.public_repos}</div>
        {/* <div className="text-primary">
          Available for hiring {user.hireable ? "Yes" : "No"}
        </div> */}
        <div className="text-primary">Followers: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;

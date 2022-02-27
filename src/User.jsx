import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="info-container">
      <div className="d-flex justify-content-center mb-4">
        <p className="title">Your Personal Details</p>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="subtitle">Name:</p>
        </div>
        <div>
          <p>{user.firstName + " " + user.lastName}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="subtitle">Email Id:</p>
        </div>
        <div>
          <p>{user.emailId}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="subtitle">Gender:</p>
        </div>
        <div>
          <p>{user.gender}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="subtitle">Age:</p>
        </div>
        <div>{user.age}</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="subtitle">Marital Status:</p>
        </div>
        <div>
          <p>{user.maritalStatus}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="subtitle">Qualification:</p>
        </div>
        <div>
          <p>{user.qualification}</p>
        </div>
      </div>
    </div>
  );
};

export default User;

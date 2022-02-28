import React from "react";
import "./User.css";

const User = ({ user, onReset }) => {
  return (
    <div
      className="card border-warning m-4 p-4"
      style={{ width: "40%", height: "max-content" }}
    >
      <div class="card-header bg-transparent border-warning d-flex justify-content-center mb-4">
        <b>Your Personal Details</b>
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
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-outline-dark mt-3 btn-md"
          onClick={onReset}
        >
          Reset Details
        </button>
      </div>
    </div>
  );
};

export default User;

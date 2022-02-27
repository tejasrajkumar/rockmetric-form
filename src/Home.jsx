import React, { useState } from "react";
import logo from "./assets/images/logo.jpg";
import User from "./User";
import "./Home.css";

const defaultUser = {
  firstName: "",
  lastName: "",
  emailId: "",
  gender: "Male",
  age: "",
  maritalStatus: "",
  qualification: "",
};

const Home = () => {
  const [user, setUser] = useState(defaultUser);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("userSignUpForm").reset();
    setSubmitted(true);
  };

  const isMandatoryValuesAvailable = () => {
    return user.firstName && user.lastName && user.age && user.gender;
  };

  return (
    <>
      <div className={submitted ? "signedup-container" : "signup-container"}>
        <form
          id="userSignUpForm"
          className="signup-form"
          onSubmit={handleSubmit}
        >
          <div className="form-header">
            <img
              src={logo}
              className="img-fluid"
              alt="logo"
              width="124px"
              height="124px"
            />
            <p className="note mb-3">
              Please enter your personal details to sign up with Rockmetric
            </p>
          </div>
          <div className="row row-cols-2 mb-3">
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                required
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="row row-cols-1 mb-3">
            <div>
              <label htmlFor="emailId" className="form-label">
                Email Id
              </label>
              <input
                type="email"
                className="form-control"
                aria-label="Email Id"
                placeholder="Enter your Email Id"
                onChange={(e) => setUser({ ...user, emailId: e.target.value })}
              />
            </div>
          </div>
          <div className="row row-cols-2">
            <div className="col mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                aria-label="Gender"
                placeholder="Select your gender"
                required
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your age"
                aria-label="Age"
                aria-describedby="basic-addon1"
                required
                onChange={(e) =>
                  setUser({ ...user, age: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <label htmlFor="maritalStatus" className="form-label">
            Marital Status
          </label>
          <div className="flex-fields">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="maritalStatus"
                id="singleMaritalStatus"
                value="Single"
                onChange={(e) =>
                  setUser({ ...user, maritalStatus: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="singleMaritalStatus">
                Single
              </label>
            </div>
            <div className="form-check mx-3 mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="maritalStatus"
                id="marriedMaritalStatus"
                value="Married"
                onChange={(e) =>
                  setUser({ ...user, maritalStatus: e.target.value })
                }
              />
              <label
                className="form-check-label"
                htmlFor="marriedMaritalStatus"
              >
                Married
              </label>
            </div>
          </div>
          <label htmlFor="qualification" className="form-label">
            Qualification
          </label>
          <div className="flex-fields">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="10th"
                id="tenthQualification"
                onChange={(e) =>
                  setUser({ ...user, qualification: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="qualification">
                10<sup>th</sup>
              </label>
            </div>
            <div className="form-check mx-3 mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="12th"
                id="twelvthQualification"
                onChange={(e) =>
                  setUser({ ...user, qualification: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="qualification">
                12<sup>th</sup>
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="B.Tech"
                id="btechQualification"
                onChange={(e) =>
                  setUser({ ...user, qualification: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="qualification">
                B.Tech
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
        {submitted && isMandatoryValuesAvailable() && <User user={user} />}
      </div>
    </>
  );
};

export default Home;

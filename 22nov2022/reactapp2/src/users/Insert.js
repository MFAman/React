import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      // let thumb = "";
      // if (productInfo.image !== "") {
      //   const thumbArray = productInfo.image.split("\\");
      //   thumb = thumbArray[thumbArray.length - 1];
      // }

      axios
        .post(`http://localhost/reactApi/addusers.php`, {
          username: userInfo.name,
          useremail: userInfo.email,
          userpass: userInfo.password,
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/users`);
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">Add New User</h2>
      <form className="insertForm" onSubmit={submitUser}>
        <div className="form-group">
          <label htmlFor="_name">Name</label>
          <input
            type="text"
            id="_name"
            name="name"
            onChange={onChangeValue}
            placeholder="Enter name"
            autoComplete="off"
            required
            className="form-control"
          />

          <label htmlFor="_email">Email</label>
          <input
            type="email"
            id="_email"
            name="email"
            onChange={onChangeValue}
            placeholder="Enter email"
            autoComplete="off"
            required
            className="form-control"
          />

          <label htmlFor="_pass">Password</label>
          <input
            type="password"
            id="_pass"
            name="password"
            onChange={onChangeValue}
            placeholder="Enter Password"
            autoComplete="off"
            required
            className="form-control"
          />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Insert;

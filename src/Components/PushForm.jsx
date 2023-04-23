import React from "react";
import "./PushForm.css";
import logo from "../10ROOT - logo.jpg";
import { useState } from "react";
import axios from "axios";

export default function PushForm() {
  const [formInputs, setFormInputs] = useState({
    PhoneId: "",
    TLL: "",
    Email: "",
    Description: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const ExecutCommand = async (e) => {
    e.preventDefault();
    console.log(formInputs);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/pushForm`,
        formInputs
      );
      console.log("res:", res.data);
    } catch (err) {
      console.log(err);
    }
    setFormInputs({
      PhoneId: "",
      TLL: "",
      Email: "",
      Description: "",
    });
  };

  return (
    <form onSubmit={ExecutCommand} className="form">
      <h3 className="title">PushApp GUI</h3>
      <div className="text-inputs">
        <div className="form-comp">
          <label htmlFor="phoneId">Phone ID: </label>
          <input
            className="form-comp"
            type="text"
            id="phoneId"
            name="PhoneId"
            value={formInputs.PhoneId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-comp">
          <label htmlFor="tll">TLL: </label>
          <input
            className="form-comp"
            type="text"
            id="tll"
            name="TLL"
            value={formInputs.TLL}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-comp">
          <label htmlFor="email">Email: </label>
          <input
            className="form-comp"
            type="text"
            id="email"
            name="Email"
            value={formInputs.Email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-comp">
          <label htmlFor="description">Description: </label>
          <input
            className="form-comp"
            type="text"
            id="description"
            name="Description"
            value={formInputs.Description}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="form-comp go-but">
        Send!
      </button>
      <div className="pic">
        <img src={logo} alt="10root_logo" />
      </div>
    </form>
  );
}

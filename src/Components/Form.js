import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formInputs, setFormInputs] = useState({
    RequestType: "",
    User: "",
    Password: "",
    Element: "",
    RubeusDir: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };
  console.log(formInputs);

  const ExecutCommand = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/hello", formInputs);
      console.log("res:", res.data);
    } catch (err) {
      console.log(err);
    }
    setFormInputs({
      RequestType: "",
      User: "",
      Password: "",
      Element: "",
      RubeusDir: "",
    });
  };

  return (
    <div>
      <form onSubmit={ExecutCommand}>
        <div className="">
          <label id="type">RequestType</label>
          <select
            name="RequestType"
            id="type"
            value={formInputs.RequestType}
            onChange={handleInputChange}
          >
            <option selected>select:</option>
            <option value="tgt">TGT</option>
            <option value="tgs">TGS</option>
          </select>
        </div>
        <div className="">
          <label id="element">Checked Element:</label>
          <select
            name="Element"
            id="element"
            value={formInputs.Element}
            onChange={handleInputChange}
          >
            <option selected>select:</option>
            <option value="ip">Ip</option>
            <option value="cAccess">Condition Access</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="">
          <label id="user">User</label>
          <input
            type="text"
            id="user"
            name="User"
            value={formInputs.User}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="password">Password</label>
          <input
            type="text"
            id="password"
            name="Password"
            value={formInputs.Password}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="rubDir">Rubeus Dir:</label>
          <input
            type="text"
            id="rubDir"
            name="RubeusDir"
            value={formInputs.RubeusDir}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}

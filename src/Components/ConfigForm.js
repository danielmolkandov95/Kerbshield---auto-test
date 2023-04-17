import React, { useState } from "react";
import axios from "axios";

export default function ConfigForm() {
  const [formInputs, setFormInputs] = useState({
    Name: "LowPrivTGTRule",
    user: "user",
    domain: "domain",
    TGTReqFlags: "0x0",
    ip: "0.0.0.0",
    CEncType: "23",
    Script: "cmd /c whoami",
    TGTRepFlags: "0x0",
    ConditionalAccess: "Allow",
    AEncType: "23",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };
  console.log(formInputs);

  const ExecutCommand = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/confVal", formInputs);
      console.log("res:", res.data);
    } catch (err) {
      console.log(err);
    }
    setFormInputs({
      Name: "LowPrivTGTRule",
      user: "user",
      domain: "domain",
      TGTReqFlags: "0x0",
      ip: "0.0.0.0",
      CEncType: "23",
      Script: "cmd /c whoami",
      TGTRepFlags: "0x0",
      ConditionalAccess: "Allow",
      AEncType: "23",
    });
  };

  return (
    <div>
      <form onSubmit={ExecutCommand}>
        <div className="">
          <label id="Name">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formInputs.Name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="user">User</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formInputs.user}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="domain">domain</label>
          <input
            type="text"
            id="domain"
            name="domain"
            value={formInputs.domain}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="TGTReqFlags">TGTReqFlags</label>
          <input
            type="text"
            id="TGTReqFlags"
            name="TGTReqFlags"
            value={formInputs.TGTReqFlags}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="ip">ip:</label>
          <input
            type="text"
            id="ip"
            name="ip"
            value={formInputs.ip}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="EncType">EncType</label>
          <input
            type="text"
            id="EncType"
            name="CEncType"
            value={formInputs.CEncType}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="Script">Script</label>
          <input
            type="text"
            id="Script"
            name="Script"
            value={formInputs.Script}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="TGTRepFlags">TGTRepFlags</label>
          <input
            type="text"
            id="TGTRepFlags"
            name="TGTRepFlags"
            value={formInputs.TGTRepFlags}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="ConditionalAccess">ConditionalAccess</label>
          <input
            type="text"
            id="ConditionalAccess"
            name="ConditionalAccess"
            value={formInputs.ConditionalAccess}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="">
          <label id="EncType">EncType</label>
          <input
            type="text"
            id="EncType"
            name="AEncType"
            value={formInputs.AEncType}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}

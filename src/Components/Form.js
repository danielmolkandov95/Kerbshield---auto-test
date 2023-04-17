import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import logo from "../10ROOT - logo.jpg";

export default function Form() {
  const [isStress, setIsStress] = useState(false);
  const [isThread, setIsThread] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  const [formInputs, setFormInputs] = useState({
    RequestType: "",
    User: "",
    Password: "",
    Element: "",
    RubeusDir: "",
    Stress: "",
    thread: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };
  console.log(formInputs);

  const ExecutCommand = async (e) => {
    e.preventDefault();
    setIsSpin(true);
    try {
      const res = await axios.post("http://localhost:8080/hello", formInputs);
      console.log("res:", res.data);
    } catch (err) {
      console.log(err);
    }
    setFormInputs({
      RequestType: "",
      Stress: "",
      User: "",
      Password: "",
      RubeusDir: "",
      thread: "",
    });
    setIsSpin(false);
    setIsStress(false);
    setIsThread(false);
  };

  const handleStressChange = (e) => {
    setIsStress(e.target.checked);
  };
  const handleThreadChange = (e) => {
    setIsThread(e.target.checked);
  };

  return (
    <>
      <form onSubmit={ExecutCommand} className="form">
        <div>
          <div className="form-comp">
            <label id="type">RequestType</label>
            <select
              className="form-comp"
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
          <div className="form-comp">
            <input
              className="form-comp"
              type="checkbox"
              id="stress1"
              name="stress"
              onChange={handleStressChange}
              checked={isStress}
            ></input>
            <label id="sterss1">Stress - loop</label>
            {isStress && (
              <div className="form-comp">
                <label id="stress">How many times to run the script?</label>
                <input
                  className="form-comp"
                  type="text"
                  id="stress"
                  name="Stress"
                  value={formInputs.Stress}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </div>
          <div className="form-comp">
            <input
              className="form-comp"
              type="checkbox"
              id="thread"
              name="thread"
              onChange={handleThreadChange}
              checked={isThread}
            ></input>
            <label id="thread">Stress - Multithreading</label>
            {isThread && (
              <div className="form-comp">
                <label id="thread">How many times to run the script?</label>
                <input
                  className="form-comp"
                  type="text"
                  id="thread"
                  name="thread"
                  value={formInputs.thread}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </div>
          <div className="text-inputs">
            <div className="form-comp">
              <label id="user">User: </label>
              <input
                className="form-comp"
                type="text"
                id="user"
                name="User"
                value={formInputs.User}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="form-comp">
              <label id="password">Password: </label>
              <input
                className="form-comp"
                type="text"
                id="password"
                name="Password"
                value={formInputs.Password}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="form-comp">
              <label id="rubDir">Rubeus Dir: </label>
              <input
                className="form-comp"
                type="text"
                id="rubDir"
                name="RubeusDir"
                value={formInputs.RubeusDir}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <button type="submit" className="form-comp go-but">
            Go!
          </button>
          {isSpin ? (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <img src={logo} alt="10root_logo" />
        </div>
      </form>
    </>
  );
}

import React from "react";
import "../App.css";

const ClassType = () => {
  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Attend class</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select className="form-control" id="class">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control" id="type">
              <option selected>class</option>
              <option>Homework club</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <select className="form-control" id="date">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassType;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (_id) => {
    axios
      .delete(`/delete/${_id}`)
      .then((res) => {
        console.log("Book deleted!");
        setData(data.filter((each) => each._id !== _id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <NavLink
              to="/createbook"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </NavLink>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">booklist to show</div>
      </div>
    </div>
  );
};

export default Books;

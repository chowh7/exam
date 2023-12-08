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

  const img = "https://images.unsplash.com/photo-1495446815901-a7297e633e8d";

  const handleClick = (_id) => {
    axios
      .delete(`/${_id}`)
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
            <br />
            <h2 className="display-4 text-center">{data.length}</h2>
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
        {data.map((each) => (
          <div className="col-md-11" key={each._id}>
            
            <img width="30%" src={img} alt="test" />
            <h2>Title: {each.title}</h2>
            <h3>Author: {each.author}</h3>
            <h3>Description: {each.description}</h3>
            
            <button className='btn btn-outline-warning float-right' onClick={() => handleClick(each._id)}>X</button>
            <h3>Pages: {each.pages}</h3>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

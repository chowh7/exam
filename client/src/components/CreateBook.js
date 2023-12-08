import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setOnChangeTitle] = useState("");
  const [author, setOnChangeAuthor] = useState("");
  const [description, setOnChangeDescription] = useState("");
  const [pages, setOnChangePages] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("/", {title, author, description, pages})
    .then((res) => {
      console.log("Book Added!");
      navigate("/books");
    });
  };

  return (
    <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form novalidate="" onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value={title}
        onChange={(e) => setOnChangeTitle(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value={author}
        onChange={(e) => setOnChangeAuthor(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
        onChange={(e) => setOnChangeDescription(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  placeholder="pages"
                  name="pages"
                  class="form-control"
                  value={pages}
        onChange={(e) => setOnChangePages(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CreateBook;

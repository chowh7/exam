import express from "express";
import Book from "../models/book.js";
import mongoose from "mongoose";

const router = express.Router();

// @route GET /
// @description Get all books
router.route("/").get((req, res) => {
  Book.find({})
    //.sort({ title: 1 })
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json("Server Error: " + err));
});

// @route GET /:id
// @description Get single book by id
router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      console.log(book);
      res.json(book);
    })
    .catch((err) => res.status(404).json("Server Error: " + err));
});

// @route POST /
// @ description add/save book
router.route("/").post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const pages = req.body.pages;
    // create a new Book object
    const newBook = new Book({
      title,
      author,
      description,
      pages
    });
      // save the new book
      newBook
      .save()
      .then(() => res.json("Book added!"))
      .catch((err) => res.status(404).json("Server Error: " + err));
  
  });




  // @route PUT or POST /:id
  // @description Update book by id
  router.route("/:id").post((req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.json("Book Updated."))
      .catch((err) => res.status(404).json("Server Error: " + err));
  });

  router.route("/:id").put((req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.json("Book Updated."))
      .catch((err) => res.status(404).json("Server Error: " + err));
  });


  
  // @route DELETE /:id
  // @description Delete book by id
  router.route("/:id").delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.json("Book deleted."))
      .catch((err) => res.status(404).json("Server Error: " + err));
  });

  // else 404 error
  router.get('*', (req, res) => 
    res.status(404).send("Page Not Found")
  );

export default router;

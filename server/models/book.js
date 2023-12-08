import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author :{
    type: String,
    reqired: true
  },
  description: {
    type: String
  },
  pages: {
    type: Number
  }
});
const Book = mongoose.model("300367633-chow", bookSchema);
export default Book;
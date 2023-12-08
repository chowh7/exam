import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bookRouter from "./routes/book.js";
const app = express();
const port = 3001;

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
//app.use(express.urlencoded({ extended: true }));

//Connect to Mongo DB
mongoose.connect("mongodb+srv://testUser003:csis3380@cluster0.fisfqei.mongodb.net/BookList?retryWrites=true&w=majority")
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.log(err)
});

app.use(cors())
app.use("/books", bookRouter)

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})
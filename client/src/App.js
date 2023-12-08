import './App.css';
import Books from "./components/books";
//import CreateBook from "./components/CreateBook";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/books";

function App() {
  return (
    <Routes>
    <Route path="/books" element={<Books />} />
      <Route path="/" element={<Books />} />
    </Routes>
  );
}

export default App;

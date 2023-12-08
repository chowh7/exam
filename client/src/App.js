import "./App.css";
import Books from "./components/books";
import CreateBook from "./components/CreateBook";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "https://examserver-qr72.onrender.com/books";

function App() {
  return (
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/createbook" element={<CreateBook />} />
      <Route path="/" element={<Books />} />
    </Routes>
  );
}

export default App;

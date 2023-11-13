import "./App.css";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Document } from "./pages/Doc/Document";
import { Footer } from "./components/Footer";
import {NavBar} from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="document" element={<Document />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

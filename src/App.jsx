import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { MyContext } from "./MyContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PostForm from "./Components/PostForm";

function App() {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState("");
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{ show, setShow, alert, setAlert }}>
          <Routes>
            <Route path="/" element={<Login/>} />

            <Route path="/home" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/newPost" element={<PostForm />} />
            <Route path="/newPost/:id" element={<PostForm />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navbar from "./components/NavBar";
import File from "./File/components/file";
import FilesList from "./File/components/FilesList";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="content">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} exact/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/file" element={<File />} />
          <Route path="/" element={<Chat />} />
          <Route path="/list" element={<FilesList/>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

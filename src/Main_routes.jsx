import React from "react";
import {Route, Routes } from "react-router-dom";
import Appp from "./App";
import BookDetailPage from "./components/BookDetailPage";
import ProfilePage from "./components/Profile";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Appp />} /> {/* Главная страница с книгами */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Главная страница с книгами */}
        <Route path="/book/:id" element={<BookDetailPage />} /> {/* Страница с деталями книги */}
      </Routes>
  );
};

export default App;

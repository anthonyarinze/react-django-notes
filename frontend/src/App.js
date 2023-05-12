import React from "react";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} />
        <Route path="/" element={<NotesListPage />} />
        <Route path="note/:id" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

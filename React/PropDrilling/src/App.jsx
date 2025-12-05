import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GrandParent from "./components/GrandParent";
import { Routes, Route } from "react-router-dom";
import Parent from "./components/Parent";
import Child from "./components/Child";
import GrandChild from "./components/GrandChild";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GrandParent />}></Route>
        <Route path="/gp" element={<GrandParent />}></Route>
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/grandchild/:id" element={<GrandChild />} />
      </Routes>
      hello
    </>
  );
}

export default App;

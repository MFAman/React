import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Garage from "./pages/Cars";
import Colors from "./components/colors/colors";
import reportWebVitals from "./reportWebVitals";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import UserList from "./users/UserList";
import Insert from "./users/Insert";
import Edit from "./users/Edit";
import Allproduct from "./product/Allproduct";
import Addproduct from "./product/Addproduct";
import Comp1 from "./components/Comp1";
import Editproduct from "./product/Editproduct";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars" element={<Garage />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/users/edit/:ids" element={<Edit />} />
          <Route path="/products" element={<Allproduct />} />
          <Route path="/products/new" element={<Addproduct />} />
          <Route path="/comp1" element={<Comp1 />} />
          <Route path="/product/editproduct/:pid" element={<Editproduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

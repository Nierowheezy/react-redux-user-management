import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddUser />} />
      <Route exact path="/edit/:id" component={() => <EditUser />} />
    </div>
  );
};
export default App;

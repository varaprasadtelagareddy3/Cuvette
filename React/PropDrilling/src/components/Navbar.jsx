import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/gp");
        }}
      >
        {" "}
        GrandParent{" "}
      </button>
      <button
        onClick={() => {
          navigate("/parent");
        }}
      >
        {" "}
        Parent{" "}
      </button>
      <button
        onClick={() => {
          navigate("/child");
        }}
      >
        {" "}
        child{" "}
      </button>
      <button
        onClick={() => {
          navigate("/grandchild/:");
        }}
      >
        {" "}
        Grandchild
      </button>
    </div>
  );
};

export default Navbar;

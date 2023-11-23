import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../state/user";
import { useSelector } from "react-redux";

export default function Logged() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    axios.post("http://localhost:3001/api/logout").then(() => {
      dispatch(setUser(null));
      navigate("/login");
    });
  };

  return <div></div>;
}

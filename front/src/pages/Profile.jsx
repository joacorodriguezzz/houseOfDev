import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

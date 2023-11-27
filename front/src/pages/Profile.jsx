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
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5 profile-container">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaShegt_FPYXgalLHfcw8k7n7srebcXl86rDDv6_K3RljyjHPySoKEoHFZPsmsb66lK0&usqp=CAU"
        alt="Profile picture"
      />
      <h2 className="text-center text-2xl font-semibold mt-3">{user.name}</h2>
      <p className="text-center text-gray-600 mt-1">{user.jobTitle}</p>

      <div className="mt-5">
        <h3 className="text-xl font-semibold">Email</h3>
        <p className="text-gray-600 mt-2">{user.email}</p>
        <h3 className="text-xl font-semibold">Teléfono</h3>
        <p className="text-gray-600 mt-2">+{user.phone}</p>
      </div>
    </div>
  );
}

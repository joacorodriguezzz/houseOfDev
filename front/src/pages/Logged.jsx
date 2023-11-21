import React, { useEffect, useState } from "react";

export default function Logged() {
  const [user, setUser] = useState({});
  return (
    <div>
      <h1>bienvenido, {user.name}</h1>
      <button>logout</button>
    </div>
  );
}

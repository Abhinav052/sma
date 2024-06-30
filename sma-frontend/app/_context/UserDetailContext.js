"use client";
import { createContext, useEffect } from "react";
import { useState } from "react";
export const UserDetailsContext = createContext();

export default function UserDetailsState({ children }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => console.log(userDetails), [userDetails]);

  function printData(data) {
    setUserDetails(data);
  }

  useEffect(() => console.log("render"), []);

  return (
    <UserDetailsContext.Provider
      value={{ userDetails, setUserDetails, printData }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
}

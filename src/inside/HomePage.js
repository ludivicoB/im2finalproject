import React from "react";
import { useUser } from "../UserProvider";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./HomePage.css";
export default function HomePage() {
  const { user } = useUser();
  useEffect(() => {
    console.log(user);
  });
  return (
    <>
      <NavBar />
    </>
  );
}

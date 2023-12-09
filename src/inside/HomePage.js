import React from "react";
import { useUser } from "../UserProvider";
import { useEffect } from "react";
export default function HomePage() {
  const { user } = useUser();
  useEffect(() => {
    console.log(user);
  });
  return <div>This is HomePage</div>;
}

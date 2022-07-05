import React, { useEffect, useState } from "react";

export const ListenerEffect: React.FC = () => {
  const [keyPresed, setKeyPresed] = useState("");

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log("Listener active -- ", event.key);
    setKeyPresed(event.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    /*  return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }; */
  }, []);

  return (
    <div>
      {keyPresed.length ? (
        <h1>You clicked {keyPresed} key.</h1>
      ) : (
        <h1>You haven't clicked anything yet.</h1>
      )}
    </div>
  );
};

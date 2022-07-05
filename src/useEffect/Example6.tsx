import React, { useState } from "react";
import { ListenerEffect } from "./ListenerEffect";

export const Example6: React.FC = () => {
  const [showListenerEffect, setShowLitenerEffect] = useState(false);

  function onButtonClick() {
    setShowLitenerEffect(!showListenerEffect);
  }

  return (
    <div>
      {showListenerEffect && <ListenerEffect />}
      <button onClick={onButtonClick}>
        {showListenerEffect ? "Hide" : "Show"}
      </button>
    </div>
  );
};

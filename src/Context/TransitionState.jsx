import { createContext, useState } from "react";

export const TransitionContext = createContext({});

export const TransitionCtxProvider = ({ children }) => {
  const [transitionEnded, setTransitionEnded] = useState(true);

  const handleTransitionStatus = (value) => {
    console.log("handleTransitionStatus", { value });
    setTransitionEnded(value);
  };

  const value = {
    transitionEnded,
    handleTransitionStatus,
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
};

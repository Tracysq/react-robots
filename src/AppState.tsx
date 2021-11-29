import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "qdd",
  shoppingCart: { items: [] },
};

export const context = React.createContext(defaultContextValue);

// 高阶函数 HOC
export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);

  return <context.Provider value={state}>{props.children}</context.Provider>;
};

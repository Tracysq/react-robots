import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props: any) => {
    const setState = useContext(appSetStateContext);

    const addToCart = (id: number, name: string) => {
      if (setState) {
        setState((state) => {
          const items = state.shoppingCart.items;
          if (items.find((i) => i.id === id)) {
            return { ...state };
          }
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };
    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

export default withAddToCart;

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id: number, name: string) => {
    if (setState) {
      setState((state) => {
        const items = state.shoppingCart.items;
        if (items.find((i) => i.id === id)) {
          return { ...state };
        }
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCart;
};

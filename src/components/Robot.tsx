import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { context, appSetStateContext } from "../AppState";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(context);
  const setState = useContext(appSetStateContext);

  const addToCart = () => {
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

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};

export default Robot;

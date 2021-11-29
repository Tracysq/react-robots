import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { context } from "../AppState";
import withAddToCart from "./AddToCart";

interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id: number, name: string) => void
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(context);

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default withAddToCart(RobotDiscount);

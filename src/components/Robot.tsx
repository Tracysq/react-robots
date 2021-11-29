import React from "react";
import styles from "./Robot.module.css";
import { context } from "../index";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <context.Consumer>
      {(value) => {
        return (
          <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
          </div>
        );
      }}
    </context.Consumer>
  );
};

export default Robot;

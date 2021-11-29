import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {
}

interface State {
  robotList: any[];
  count: number;
}

const App: React.FC<Props> = (props) => {
  const [robotList, setRobotList] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => response.json())
    // .then((json) =>
    //   setRobotList(json)
    // );

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotList(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>React Robots</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {(!error || error!== '') && <div>网站出错：{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotList.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email}></Robot>
          ))}
        </div>
      ) : (
        <h2>加载中</h2>
      )}
    </div>
  );
};

export default App;

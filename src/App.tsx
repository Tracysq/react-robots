import React from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotList: any[];
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      robotList: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          robotList: json,
        })
      );
  }


  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>React Robots</h1>
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            }, () => {
              console.log("count: ", this.state.count);
            });
          }}
        >
          click
        </button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotList.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email}></Robot>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

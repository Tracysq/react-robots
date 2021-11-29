import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { context } from "../AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  };

  render() {
    return (
      <context.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <FiShoppingCart />
                <span>购物车 {value.shoppingCart.items.length} （件）</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen ? "block" : "none",
                }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li key={i.id}>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </context.Consumer>
    );
  }
}

export default ShoppingCart;

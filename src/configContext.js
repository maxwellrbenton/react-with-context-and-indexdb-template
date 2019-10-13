import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
  state = {
    count: 0,
    add: () => {
      this.setState(prevState => ({ ...prevState, count: prevState.count + 1}))
    }
  };

  render() {
    return (
      <Provider
        value={{ ...this.state }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };
export default Consumer;
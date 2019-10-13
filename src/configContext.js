import React, { createContext } from "react";
import  { idbKeyval } from './indexDB'
const { Provider, Consumer } = createContext();

class ConfigProvider extends React.Component {
  state = {
    data: {
      count: 0
    },
    add: () => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          count: prevState.data.count + 1 
        }
      }))
    }
  };

  async componentDidMount() {
    let data = await idbKeyval.get('data')
    if (!data) {
      await idbKeyval.set('data', this.state.data)
    } else {
      this.setState({ data })
    }
  }

  async componentDidUpdate() {
    let data = await idbKeyval.get('data')
    if (JSON.stringify(data) !== JSON.stringify(this.state.data)) {
      await idbKeyval.set('data', this.state.data)
    }
  }

  render() {
    console.log(this.state)
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
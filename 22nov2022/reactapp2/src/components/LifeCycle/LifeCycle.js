import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = "LifeCycle is just started";
  }

  UNSAFE_componentWillMount() {
    console.log("LifeCycle Will Mount");
  }

  componentDidMount() {
    console.log("LifeCycle Did Mount()");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  render() {
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default LifeCycle;

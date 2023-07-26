import { Component } from "react";
import ShimmerLoading from "./ShimmerLoading";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
    console.log("Child - Constructor Component" + " " + this.props.name);

    // this.timer = setInterval(() => {
    //   console.log("calling interval");
    // }, 1000);

    this.update = function () {
      console.log("Clicked");
    };
  }

  async componentDidMount() {
    console.log("child - componentDidMount before" + " " + this.props.name);
    // console.log(this.state);
    const res = await fetch(
      "https://api.github.com/users/Nethaji4172?client_id=0e65cebbf7447a0fdac3&client_secret=fcf17b8444dc2c2e7510f6112889b88a25af7152"
    );
    const result = await res?.json();
    console.log(result);
    this.setState({
      info: {
        name: result.name,
        location: result.location,
      },
    });
    // console.log(this.state.info);
    console.log("child - componentDidMount after" + " " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.info !== prevState.info);
    if (this.state.info !== prevState.info) {
      console.log("hey");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("child - Render Component" + " " + this.props.name);

    // console.log(Object.keys(this.state.info).length === 0);
    // console.log(this.state.info);
    const { name, location } = this.state.info;
    return Object.keys(this.state.info).length === 0 ? (
      <ShimmerLoading count={2} />
    ) : (
      <>
        {/* <h1>HEllo</h1>
        <p>{this.props.name}</p> */}
        <p>{name}</p>
        <p>{location}</p>
        <button onClick={this.update}>Update</button>
      </>
    );
  }
}

export default Profile;

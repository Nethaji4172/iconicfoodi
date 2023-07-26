import { Component } from "react";
import Profile from "./Profile";
import UserContext from "../Utils/UserContext";

// const About1 = () => {
//   return (
//     <div>
//       <h1>About us page </h1>
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      info: { name: "dummy name", location: "Dummy location" },
    };
    console.log("Parent - Constructor Component");
  }

  componentDidMount() {
    console.log("Parent - ComponenetDidMount");
  }
  render() {
    console.log("Parent - Render Component");
    const { count, count2 } = this.state;
    const { name, location } = this.state.info;
    return (
      <div>
        <UserContext.Consumer>
          {(value) => (
            <>
              <h1>{value.user.name}</h1>
            </>
          )}
        </UserContext.Consumer>
        <h1>
          About us page {count}
          {count2}
        </h1>
        <button
          onClick={() =>
            this.setState({
              count: 1,
              count2: 2,
            })
          }
        >
          update
        </button>
        <Profile name={"First Child"} name1={name} location={location} />
        {/* <Profile name={"Second Child"} /> */}
      </div>
    );
  }
}

export default About;

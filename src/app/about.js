import React from "react";
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    // code
    super(props);
  }

  render() {
    return(
      <div>
        <Link to="/">Home</Link>
        <h2> All about me </h2>
      </div>
    )
  }
}

export default About;

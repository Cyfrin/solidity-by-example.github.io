import React, { Component } from "react";
import Example from "../../components/Example";
import html from "./index.html.js";

class Shadow extends Component {
  render() {
    return <Example title="Shadowing Inherited State Variables" html={html} />;
  }
}

export default Shadow;

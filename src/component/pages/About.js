import React, { Fragment } from "react";
import "./About.css";

export default function About() {
  return (
    <Fragment>
      <header id="header">
        <div className="container">
          <h1>About ther Github finder App</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>The purpose of App is allow to users to Search Github Users.</p>
        </div>
      </section>
    </Fragment>
  );
}

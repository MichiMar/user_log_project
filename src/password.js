import React from "react";

export default class Password extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div className="pasword">
        <div className="access-wrapper">
          <div className="mini-header">
            <div className="logo">
              <img src="google_img_clip.png"></img>
            </div>
            <h2>Welcome</h2>
            <div className="text">
              <p>
                Google propmts are disabled right now because there's something
                unusual about how you're signing in
              </p>
            </div>
          </div>

          <div className="input-wrapper">
            <div className="input-password">
              <input
                type="password"
                placeholder="Enter your password"
                className="input-password"
              />
            </div>

            <a href="#">forgotted?</a>
          </div>

          <div className=""></div>
          <div className="suggestion">
            <a href="#">Learn More</a>
          </div>

          <div className="enter">
            <div className="create-account">
              <a href="#">More ways to sign</a>
            </div>

            <div className="blue-span">
              <div className="next-span">
                <span className="next">Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

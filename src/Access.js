import React from "react";
import Password from "./password";

export default class Access extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div>
        <div className="access-wrapper">
          <div className="mini-header">
            <div className="logo">
              <img src="google_img_clip.png"></img>
            </div>
            <h2>Sign In</h2>
            <h5>Use your Google Account</h5>
          </div>

          <form onSubmit={}>
            <div className="input-wrapper">
              <div className="input-email">
                <input
                  type="email"
                  placeholder="email or phone"
                  className="input-email"
                />
              </div>

              <a href="#">Forgot email?</a>
            </div>

            <div className=""></div>
            <div className="suggestion">
              <div className="text">
                <p>Not your computer? Use Guest mode to sign in privately</p>
              </div>

              <a href="#">Learn More</a>
            </div>

            <div className="enter">
              <div className="create-account">
                <a href="#">Create account</a>
              </div>

              <div className="blue-span">
                <div className="next">
                  <a to="/password" onClick={true ? <Password /> : null}>
                    Next
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

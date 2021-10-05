import React from "react";
import ReactDOM from "react-dom";
import BmiCalc from "./BmiCalc";

class App extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    gender: "",
    age: "",
    height: 0,
    weight: 0,
  };

  render() {
    return (
      <div
        className="ui form"
        style={{
          backgroundColor: "#55ACEE",
          border: "1px solid black",
          float: "center",
          marginLeft: "100px",
        }}
      >
        <h1 style={{ marginLeft: "10px" }}> BMI Calculator</h1>
        <div className="fields" style={{ marginLeft: "100px" }}>
          <div className="field">
            <label>First name</label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Last name</label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </div>
        </div>
        <br />

        <div className="ui input" style={{ marginLeft: "100px" }}>
          <input
            type="text"
            placeholder="Male/Female"
            value={this.state.gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div className="ui input" style={{ marginLeft: "100px" }}>
          <input
            type="text"
            placeholder="Age(in years)"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div className="ui right labeled input" style={{ marginLeft: "100px" }}>
          <input
            type="text"
            placeholder="Enter weight.."
            value={this.state.weight}
            onChange={(e) => this.setState({ weight: e.target.value })}
          />
          <div className="ui basic label">kg</div>
        </div>
        <br />
        <br />
        <div className="ui right labeled input" style={{ marginLeft: "100px" }}>
          <input
            type="text"
            placeholder="Enter height..."
            value={this.state.height}
            onChange={(e) => this.setState({ height: e.target.value })}
          />
          <div className="ui basic label">meters</div>
        </div>
        <br />
        <br />

        <BmiCalc
          h={this.state.height}
          w={this.state.weight}
          name={this.state.firstname}
        />
        <br />
        <br />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

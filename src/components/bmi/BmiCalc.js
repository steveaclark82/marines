import React from "react";
import Result from "./Result";

class BmiCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, error: "" };
  }

  calculateBmi = () => {
    let error = "";
    let formValid = true;
    let count = 0;
    if (!this.props.name) {
      formValid = false;
      count++;
      error = count + ") firstname cannot be empty. " + " ";
    }
    if (!this.props.h) {
      formValid = false;
      count++;
      error = error + count + ") Please provide a valid height. " + " ";
    }
    if (!this.props.w) {
      formValid = false;
      count++;
      error = error + count + ") Please provide a valid weight. " + " ";
    }

    if (formValid) {
      const add = Number(this.props.w) / Math.pow(Number(this.props.h), 2);
      this.setState({ result: add });
    }

    this.setState({ error: error });
  };

  render() {
    //console.log(this.state.error);
    return (
      <div style={{ marginLeft: "2px" }}>
        <button
          className="ui button"
          type="submit"
          style={{ marginLeft: "15px" }}
          onClick={this.calculateBmi}
        >
          Submit
        </button>
        <br />
        <br />
        <div>
          <h3>
            Your BMI is {""}
            {this.state.result}
          </h3>
        </div>
        <div>
          <Result
            name={this.props.name}
            result={this.state.result}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
export default BmiCalc;

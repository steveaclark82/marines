import React from "react";

class Result extends React.Component {
  healthAdvisor() {
    if (!this.props.result) {
      return <div>{this.props.error}</div>;
    } else {
      if (this.props.result < 18.5 && this.props.result > 0) {
        return (
          <div>
            Hi {this.props.name}!...Your BMI indicates that you may be
            underweight indicating
            <br />
            that you may be suffering from malnutrition ,eating disorder
            <br />
            or health problems.We suggest you to plan your diet with
            <br />
            enough vitamins and minerals.Stay fit!
            <br />
          </div>
        );
      }
      if (this.props.result > 26) {
        return (
          <div>
            Hi {this.props.name}!...Your BMI incicates that you may be
            overweight
            <br /> We advise you to carefully plan your diet and work on the
            reduction
            <br /> of fats in your diet.Stay fit!
          </div>
        );
      }

      if (this.props.result > 18.5 && this.props.result < 26) {
        return (
          <div>
            Hi {this.props.name}...Congratulations! Your BMI indicates that you
            are healthy.Stay Fit!
          </div>
        );
      }
    }
  }
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "#ffef96",
          width: "450px",
          float: "left",
        }}
      >
        <h3 style={{ fontFamily: "sans-serif" }}>{this.healthAdvisor()}</h3>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Result;

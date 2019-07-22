import React, { Fragment, Component } from "react";

import { Budget } from "./Budget";
import { Confirm } from "./Confirm";
import { Info } from "./Info";
import { Nav } from "./Nav";
import { Occasion } from "./Occasion";
import { OccasionList } from "./OccasionList";

export class Quiz extends Component {
  state = {
    answers: {
      occasion: null,
      occasionType: null,
      budget: null,
      step4: null
    },
    currentStep: 1,
    email: "",
    name: "",
    calculatingAnswers: false,
    complete: false
  };

  isStep = step => {
    return this.state.currentStep === step;
  };

  recordSelection = (key, value) => {
    this.setState(state => ({
      answers: {
        ...state.answers,
        [key]: value
      },
      [key]: value,
      currentStep: state.currentStep + 1
    }));
  };

  nextQuestion = () => {
    this.setState(state => ({
      currentStep: state.currentStep + 1
    }));
  };

  goBack = () => {
    if (this.state.currentStep) {
      this.setState(state => ({
        currentStep: state.currentStep - 1
      }));
    }
  };

  submit = () => {
    this.setState({ calculatingAnswers: true });
    setTimeout(() => {
      this.setState({
        calculatingAnswers: false,
        complete: true
      });
    }, 2000);
  };

  render() {
    const { answers, currentStep, name, email } = this.state;

    return (
      <Fragment>
        {this.isStep(1) && (
          <Occasion
            onSelect={this.recordSelection}
            currentSelection={answers.occasion}
          />
        )}
        {this.isStep(2) && (
          <OccasionList
            onSelect={this.recordSelection}
            occasion={answers.occasion}
            currentSelection={answers.occasionType}
          />
        )}
        {this.isStep(3) && (
          <Budget
            currentSelection={answers.budget}
            onSelect={this.recordSelection}
          />
        )}
        {this.isStep(4) && (
          <Info
            name={name}
            email={email}
            onChange={this.recordSelection}
            nextQuestion={this.nextQuestion}
          />
        )}
        {this.isStep(5) && <Confirm name={name} />}

        <Nav
          currentStep={currentStep}
          goBack={this.goBack}
          submit={this.submit}
        />
      </Fragment>
    );
  }
}

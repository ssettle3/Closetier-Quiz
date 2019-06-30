import React, { Fragment, Component } from "react";

import { Budget } from "./Budget";
import { Confirm } from "./Confirm";
import { FunFact } from "./FunFact";
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
      [key]: value
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

  nextQuestion = () => {
    this.setState(state => ({
      currentStep: state.currentStep + 1
    }));
  };

  render() {
    const { answers, currentStep, name } = this.state;

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
        {this.isStep(3) && <FunFact />}
        {this.isStep(4) && (
          <Budget
            currentSelection={answers.budget}
            onSelect={this.recordSelection}
          />
        )}
        {this.isStep(5) && <Info name={name} onChange={this.recordSelection} />}
        {this.isStep(6) && <Confirm name={name} />}

        <Nav
          currentStep={currentStep}
          nextQuestion={this.nextQuestion}
          goBack={this.goBack}
          submit={this.submit}
        />
      </Fragment>
    );
  }
}

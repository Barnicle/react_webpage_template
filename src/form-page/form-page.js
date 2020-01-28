import React, { Component } from "react";
import "./form-page.scss";
const state = {
  phone_number: "123",
  valid: "undef"
};
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "123",
      valid: "undef"
    };
  }
  onActive = e => {
    let number = "+7";
    e.target.value = number;
  };

  //on Blur validate phone number
  onBlur = e => {
    const number = e.target.value;
    const validation = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (number === validation)
      this.setState({
        valid: "valid"
      });
    else
      this.setState({
        valid: "invalid"
      });
  };
  render() {
    let valid = "undef";
    const data = this.state;
    return (
      <form action="http://localhost:3000/" className="form-container">
        <h2>Lorem ipsum dolor</h2>
        <input
          className={data.valid}
          required
          type="text"
          onClick={this.onActive}
          onBlur={this.onBlur}
          placeholder="Ваш телефон"
        />
        <button className="form-btn" type="submit">
          Отправить
        </button>
        <div className="checkbox">
          <input className="" type="checkbox" />
          <p>Я принимаю условия</p>
        </div>
        <div className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod
        </div>
      </form>
    );
  }
}

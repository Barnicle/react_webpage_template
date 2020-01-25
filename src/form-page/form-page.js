import React, { Component } from "react";
import "./form-page.scss";
const state = {
  phone_number: "123"
};
export default class Form extends Component {
  render() {
    const data = this.state;
    return (
      <form className="form-container">
        <h2>Lorem ipsum dolor</h2>
        <input type="text" placeholder="Ваш телефон" />
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

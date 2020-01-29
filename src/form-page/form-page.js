import React, { Component } from "react";
import "./form-page.scss";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
      valid: "undef"
    };
  }
  handleFocus = e => {
    const prefix = "+7";
    e.target.value != "" ? undefined : (e.target.value = prefix); //если форма пустая, то если её "активировать" появится строчка +7
  };

  //когда становится неактивно проверяет телефон на вреный формат, меняет класс инпута согласно этому, если все ок записывает в стейт номер телефона
  handleBlur = e => {
    const number = e.target.value;
    const validation = /\+7?([0-9]{11})$/;

    if (number.match(validation))
      this.setState({
        phone_number: number,
        valid: "valid"
      });
    else {
      this.setState({
        valid: "invalid"
      });
    }
  };

  handleSubmit = e => {
    if (this.state.valid === "valid") return true;
    else {
      return false;
    }
  };
  render() {
    const data = this.state;

    return (
      <form action="http://localhost:3000/" onSubmit={this.handleSubmit} className="form-container">
        <h2>Lorem ipsum dolor</h2>
        <input
          className={data.valid}
          required
          type="text"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          pattern="\+7?[0-9]{11}" //проверка на валидность
          placeholder="Ваш телефон"
        />
        <button className="form-btn" type="submit">
          Отправить
        </button>
        <div className="checkbox">
          <input className="" type="checkbox" required />
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

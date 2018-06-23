import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Summary.css';


class Summary extends Component{  
  constructor(props){
    super(props);
    this.state = {
      
    }
    if(!window.selectedValues){window.selectedValues = {address: "Кузнечная 43", service: "Окрашивание", category: 3, price: 1300, master: "Настя", time: "12:00"}}
    console.log(window.selectedValues);
  }
  render(){
    
    return (
      <section className="select-menu">
        <div className="row select-menu__title mb-2">
          <div className="col-8 offset-1">
            <p className="select-menu__title-text">Ваша запись:</p>
          </div>
        </div>
        <div className="row summary-info">
          <div className="col-4 offset-4 summary-wrapper">
            <div className="summary-block">
              <div className="summary-item">
                <div className="title">Адрес: </div>
                <div className="value">{window.selectedValues.address}</div>
              </div>
              <div className="summary-item">
                <div className="title">Время: </div>
                <div className="value">{window.selectedValues.time}</div>
              </div>
              <div className="summary-item">
                <div className="title">Услуга: </div>
                <div className="value">{window.selectedValues.service}</div>
              </div>
              <div className="summary-item">
                <div className="title">Мастер: </div>
                <div className="value">{window.selectedValues.master}</div>
              </div>
              <div className="summary-item">
                <div className="title">Цена: </div>
                <div className="value">{window.selectedValues.price} руб.</div>
              </div>
            </div>
            <form action="" className="summary-form">
              <label htmlFor="name">Имя: </label>
              <input id="name" type="text"/>
              <label htmlFor="phone">Телефон: </label>
              <input id="phone" type="text"/>
              <button type="button" className="btn" onClick={ ()=>{ document.querySelector('.summary-block').innerHTML = '<h3>Успешно! Ждем вас!</h3>'}}>Записаться</button>
            </form>
          </div>            
        </div>
      </section>
    );
  }
}

export default Summary;
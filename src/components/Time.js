import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Time.css';


class Time extends Component{  
  constructor(props){
    super(props);
    this.state = {
      time: ['10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00'],
      master: {
        name:  'Настя',
        status: 'Специалист 1 категории',
        free: '25 июня',
        nextfree: '28 июня'

      }
    }
    if(!window.selectedValues){window.selectedValues = {address: "Кузнечная 43", service: "Окрашивание", category: 3, price: 1300, master: "Настя", time: "12:00"}}
    console.log(window.selectedValues);
  }
  render(){
    const Button = withRouter(( props ) => {  
      return (
        <div className={"list-time " + (~~(Math.random()*2) ? 'list-time--active' : '' )} onClick={ () =>  { 
          
        window.selectedValues['time'] = props.buttonText;
        props.history.push({
          pathname: '/summary'
        }) }}>
          { props.buttonText }
        </div>  
      )
    })
    function Job(props){
      return (
          <div className="col-2 ">
            <Button buttonText={props.jobName}/>
          </div>
      );
    };
    let listServices = this.state.time.map(
      (job, i) => {
        return (          
            <Job key={i}   jobName={job} />
        )
      }
    )
    return (
      <section className="select-menu">
        <div className="row select-menu__title mb-2">
          <div className="col-8 offset-1">
            <p className="select-menu__title-text">Пожалуйста, выберите подходящее время</p>
          </div>
        </div>
        <div className="row master-info">
          <div className="col-8 offset-2 master-info__top">
            <div className="master-info__avatar"></div>
            <div className="master-info__details-block">
              <div className="details-block__name">{this.state.master.name}</div>
              <div className="details-block__status">{this.state.master.status}</div>
            </div>
            <div className="master-info__next-free-block">
              <div className="next-free__text">Следующая смена</div>
              <div className="next-free__date">{this.state.master.nextfree}</div>
            </div>
          </div>
          <div className="row col-8 offset-2">
            <h3>Свободное время {this.state.master.free}</h3>
            <div className="row">
              { listServices }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Time;
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Service.css';


class Service extends Component{  
  constructor(props){
    super(props);
    this.state = {
      services: ['Выпрямление волос', 'Окрашивание', 'Окрашивание и стрижка', 'Стрижка с укладкой', 'Укладка']
    }
  }
  render(){
    const Button = withRouter(( props ) => {
      return (
        <button type="button" className="btn btn-block" onClick={ () =>  {
          window.selectedValues['service'] = props.buttonText;
          props.history.push({
            pathname: '/category'
          }) 
        }}>
          { props.buttonText }
        </button>  
      )
    })
    function Job(props){
      return (
          <div className="col col-3 mb-3">
            <Button buttonText={props.jobName} />
          </div>
      );
    };
    let listServices = this.state.services.map(
      (job, i) => {
        return (
          <div key={i}  className="row select-menu__list justify-content-center ">
            <Job jobName={job} />
          </div>
        )
      }
    )
    return (
      <section className="select-menu">
        <div className="row select-menu__title mb-2">
          <div className="col-8 offset-1">
            <p className="select-menu__title-text">Пожалуйста, выберите услугу</p>
          </div>
        </div>          
          { listServices }
      </section>
    );
  }
}

export default Service;
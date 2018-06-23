import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Master.css';


class Category extends Component{  
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {
          name: 'Настя'
        },
        {
          name: 'Настя'     
        },
        {
          name: 'Настя'
        },
        {
          name: 'Настя'
        },
        {
          name: 'Настя'
        },
        {
          name: 'Настя'
        },
        {
          name: 'Настя'
        },
        {
          name: 'Настя'
        }
      ]
    }
    console.log(window.selectedValues);
  }
  render(){
    const Button = withRouter(( props ) => {  
      return (
        <div className="card" onClick={ () =>  { 
          
        window.selectedValues['master'] = props.buttonText.name;
        props.history.push({
          pathname: '/time'
        }) }}>
          <div className="avatar"></div>
          <div className="master">{ props.buttonText.name }</div>
        </div>  
      )
    })
    function Job(props){
      return (
          <div className="col-3 mb-3">
            <Button buttonText={props.jobName}/>
          </div>
      );
    };
    let listServices = this.state.categories.map(
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
            <p className="select-menu__title-text">Пожалуйста, выберите мастера</p>
          </div>
        </div>
        <div className="row select-menu__list ">        
          { listServices }
        </div>
      </section>
    );
  }
}

export default Category;
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Category.css';


class Category extends Component{  
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {
          name: 1,
          time: 60,
          price: 1500
        },
        {
          name: 2,
          time: 80,
          price: 1400
        },
        {
          name: 3,
          time: 85,
          price: 1300
        },
        {
          name: 4,
          time: 90,
          price: 1200
        },
        {
          name: 5,
          time: 95,
          price: 1100
        },
        {
          name: 6,
          time: 95,
          price: 1000
        },
        {
          name: 7,
          time: 100,
          price: 850
        },
        {
          name: 8,
          time: 120,
          price: 750
        },
        {
          name: 9,
          time: 130,
          price: 650
        },
      ]
    }
    console.log(window.selectedValues);
  }
  render(){
    const Button = withRouter(( props ) => {  
      return (
        <div className="card" onClick={ () =>  { 
          
        window.selectedValues['category'] = props.buttonText.name;
        props.history.push({
          pathname: '/master'
        }) }}>
          <div className="cat">{ props.buttonText.name }</div>
          <div className="time">{ props.buttonText.time } мин.</div>
          <div className="price">{ props.buttonText.price } руб.</div>
        </div>  
      )
    })
    function Job(props){
      return (
          <div className="col-4 mb-3">
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
            <p className="select-menu__title-text">Пожалуйста, выберите категорию мастера</p>
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
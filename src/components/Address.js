import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Address.css';


class Address extends Component{  
  constructor(props){
    super(props);
    this.state = {
      addresses: ['Гороховая 45', 'Московская 2', 'Кузнечная 43', 'Кузнечный 14', 'Невский 56', 'Счастливая 56', 'Невский 45', 'Жуковского 86'],
      selectedValues: {}
    }
  }
  render(){
    const Button = withRouter(( props ) => {
      return (
        <button type="button" className="btn btn-block" onClick={ () =>  { 
          window.selectedValues = { address: props.buttonText }
          props.history.push({
            pathname: '/service'
          }) 
        }}>
          { props.buttonText }
        </button>  
      )
    })
    function Studio(props){
      return (
          <div className="col-3 mb-3">
            <Button buttonText={props.addressName} />
          </div>
      );
    };
    let listAdresses = this.state.addresses.map(
      (studio, i) => {
        return <Studio key={i} addressName={studio}/>
      }
    )
    return (      
      <section className="select-menu">
        <div className="row select-menu__title mb-2">
          <div className="col-8 offset-1">
            <p className="select-menu__title-text">Пожалуйста, выберите удобную для вас студию</p>
          </div>
        </div>          
        <div className="row select-menu__group">
          {listAdresses}
        </div>
      </section>
    );
  }
}

export default Address;
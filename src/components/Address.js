import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Address.css';

const Button = withRouter(( props ) => {
  console.log(props);
  return (
    <button type="button" className="btn btn-block" onClick={ () =>  { props.history.push('/saloon') }}>
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
class Address extends Component{  
  constructor(props){
    super(props);
    this.state = {
      addresses: ['Гороховая 45', 'Московская 2', 'Кузнечная 43', 'Кузнечный 14', 'Невский 56', 'Счастливая 56', 'Невский 45', 'Жуковского 86']
    } 
  }
  handleClick() {
    this.context.router.push({
      pathname: '/users/12',
      query: { tab: 'hello' },
    });
  }
  render(){
    let listAdresses = this.state.addresses.map(
      (studio, i) => {
        return <Studio key={i} addressName={studio}/>
      }
    )
    return (
      <div>
        <div className="row">
          <div className="col-8 offset-1 mb-1">
            <h1>Online-запись в студию</h1>
          </div>
        </div>
        <section className="select-menu">
          <div className="row select-menu__title mb-2">
            <div className="col-8 offset-3">
              <p className="select-menu__title-text">Пожалуйста, выберите удобную для вас студию</p>
            </div>
          </div>          
          <div className="row select-menu__group">
            {listAdresses}
          </div>
        </section>      
      </div>
    );
  }
}

export default Address;
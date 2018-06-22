import React from 'react';

export default function (props) {
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
        <div className="row select-menu__group mb-3">
          <div className="col-3 offset-3"><button className="btn btn-block">Гороховая 45</button></div>
          <div className="col-3"><button className="btn btn-block">Московская 2</button></div>
        </div>
        <div className="row select-menu__group mb-3">
          <div className="col-3 offset-3"><button className="btn btn-block">Гороховая 45</button></div>
          <div className="col-3"><button className="btn btn-block">Московская 2</button></div>
        </div>
        <div className="row select-menu__group mb-3">
          <div className="col-3 offset-3"><button className="btn btn-block">Гороховая 45</button></div>
          <div className="col-3"><button className="btn btn-block">Московская 2</button></div>
        </div>
        <div className="row select-menu__group mb-2">
          <div className="col-3 offset-3"><button className="btn btn-block">Гороховая 45</button></div>
          <div className="col-3"><button className="btn btn-block">Московская 2</button></div>
        </div>
        <div className="row">
          <div className="col-2 offset-5"><button className="btn btn--accent btn-block">На карту</button></div>
        </div>
      </section>      
    </div>
  );
}
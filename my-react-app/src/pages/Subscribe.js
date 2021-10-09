import React from 'react'
import Submit from "./components/Submit";
import './Subscribe.css'

export default function Subscribe() {
    return (
        <>
            <div className="photo-grid">
            <div className="title-subs">
                <h2>SUBSCRIBE TO OUR NEWSLETTER 
                   AND WIN A SPA DAY</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-4 p-1 center">
                    <div className="">
                      <img className="image-grid img-fluid p-3" src="https://images.unsplash.com/photo-1506634064465-7dab4de896ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="1" />
                      <img className="image-grid img-fluid p-3" src="https://images.unsplash.com/photo-1620733719521-fa0625956f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="2" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-4 p-1 center">
                    <div className="">
                        <img className="image-grid img-fluid p-3" src="https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="3" />
                        <img className="image-grid img-fluid p-3" src="https://images.unsplash.com/photo-1568114813528-471a736a8fd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="4" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-4 p-1 center">
                    <div className="">
                        <img className="image-grid img-fluid p-3" src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="5" />
                        <img className="image-grid img-fluid p-3" src="https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="6" />
                    </div>
                  </div>
            </div>
            <div className="row g-3 align-items-center">
              
                <div className="col-auto">
                 <Submit />
              </div>
        </div>
        </div>
        </>
    )
}

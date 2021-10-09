import React from 'react'
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
                <div className="col-lg-4 col-md-4 col-xs-4 p-0 center">
                    <div className="">
                      <img className="image-grid img-fluid" src="" alt="1" />
                      <img className="image-grid img-fluid" src="" alt="2" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-4 p-0 center">
                    <div className="">
                        <img className="image-grid img-fluid" src="" alt="3" />
                        <img className="image-grid img-fluid" src="" alt="4" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-4 p-0 center">
                    <div className="">
                        <img className="image-grid img-fluid" src="" alt="5" />
                        <img className="image-grid img-fluid" src="" alt="6" />
                    </div>
                  </div>
            </div>
            <div className="row g-3 align-items-center">
              
                <div className="col-auto">
                  <input type="email" id="inputEmail" className="form-control" aria-describedby="email"/>
                </div>
                <div className="col-auto">
                  <button type="submit">Submit</button>
                </div>
              </div>
        </div>
        </>
    )
}

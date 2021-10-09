import React from 'react';
import './Items.css'

export default function Items() {
    return (
        <>
        <div className="part2">
        <div className="container products">
          <div>
            <h2>Try our new arrivals</h2>
          </div>
          <div className="row products-grid">
            <div className="col-lg-4 col-md-4 col-xs-4 center">
              <div className="box">
                <img className="image" src="https://www.freshlycosmetics.com/img/media/233/curlyvibes_fondoblanco_large_default.jpg?fb0716596ddd72de50b55176adc4bfe8" alt="cream_2" />
              </div>
              <div id="text-under">
                <h3>Curly vibes defining cream</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 center">
              <div className="box">
                <img className="image" src="https://www.freshlycosmetics.com/img/media/127/emerald_fondoblanco_large_default.jpg?da4bee7c32dc586fc4398dc3e58ce0ca" alt="cream_3" />
              </div>
              <div className="text-under">
                <h3>emerald clay facial mask</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 center">
              <div className="box">
                <img className="image" src="https://www.freshlycosmetics.com/img/media/197/AzelaicRadianceFaceTreatment_fondoblanco_large_default.jpg?019cd602aea83046e9aac303df217621" alt="cream_4" />
              </div>
              <div className="text-under">
                <h3>rose quartz facial cleanser</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
         </>
    );
}


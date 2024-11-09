import React from 'react';
import { Link } from 'react-router-dom';
const ChickPeasBlackTopHeader = () => {
    return (
        <div>
              <div class="page-title-area">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="title-item">
                  <h3 class="log_3-w">Chickpeas-black</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <Link to="/pulses"> Pulses</Link>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      {" "}
                      <Link to="/pulses/chickpeas-black">Chickpeas-black</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
            
        </div>
    );
}

export default ChickPeasBlackTopHeader;

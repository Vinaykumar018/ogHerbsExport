import React from 'react';
import { Link } from 'react-router-dom';

const MaizeTopHeader = () => {
    return (
        <div>
        <>
          <div class="page-title-area">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="title-item">
                    <h3 class="log_3-w">Maize</h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <Link to="/grains-seeds"> Grains & Seeds</Link>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        {" "}
                        <Link to="/grains-seeds/maize-corn">Maize</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
}

export default MaizeTopHeader;

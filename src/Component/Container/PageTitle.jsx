import React from 'react';
import { Link } from 'react-router-dom';
function PageTitle({title,titleB}){
    
    const [heading, route] = title.split(",");
    if(titleB){
    const [headingB, routeB] = titleB.split(",");
    }
    
    return(
        <>
            <div class="page-title-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="title-item">
                                <h3 class="log_3-w">{heading}</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><span>/</span></li>
                                    <li> <Link to={route}>{heading}</Link></li>
                                   
                                    
                                    {titleB?<> <li><span>/</span></li> <li>{headingB}</li></>:<></>}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PageTitle;
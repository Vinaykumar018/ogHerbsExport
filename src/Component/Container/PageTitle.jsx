import React from 'react';

function PageTitle({title}){
    const page_title=title;
    return(
        <>
            <div class="page-title-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="title-item">
                                <h3 class="log_3-w">{page_title}</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><span>/</span></li>
                                    <li>{page_title}</li>
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
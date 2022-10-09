import React from 'react'
import './ListBrand.css'

/**
* @author
* @function ListBrand
**/

export const ListBrand = (props) => {
    return (
        <div className="list-brand">
            <div className="grid wide list-brand__wrap">
                <div className="row list-brand__row">
                    <div className="col l-3 c-3 m-3 ">
                        <a href="/#" className="brand-item">
                            <i className="icon-brand-apple"></i>
                        </a>
                    </div>
                    <div className="col l-3 c-3 m-3 ">
                        <a href="/#" className="brand-item">
                            <i className="icon-brand-apple"></i>
                        </a>
                    </div>
                    <div className="col l-3 c-3 m-3 ">
                        <a href="/#" className="brand-item">
                            <i className="icon-brand-apple"></i>
                        </a>
                    </div>
                    <div className="col l-3 c-3 m-3 ">
                        <a href="/#" className="brand-item">
                            <i className="icon-brand-apple"></i>
                        </a>
                    </div>
                   
                  

                </div>
            </div>
        </div>
    )

}
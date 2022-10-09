import React, { useEffect, useRef, useState } from 'react'
import './Filter.scss'

/**
* @author
* @function Filter
**/


export const Filter = (props) => {
    const node = useRef();
    useEffect(() => {
        //  thêm khi đã mount
        document.addEventListener("mousedown", handleclick);
        // dọn dẹp
        return () => {
            document.removeEventListener("mousedown", handleclick);
        }
    }, [])
    const handleRemoveClass = (e) => {

    }
    const [active, setActive] = useState(false);

    const toggleClass = (e) => {
        let x = e.target.parentNode.childNodes;
        if (!e.target.classList.contains("show_filter")) {
            for (var i = 0; i < x.length; i++) {
                // if (x[i].classList.contains("show_filter")) {
                x[i].classList.remove("show_filter")

            }
        }
        e.target.classList.toggle("show_filter")

    }
    const handleclick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        console.log("wwww",e.target.classList) 
        // outside

    };
    // console.log("active: ",active)
    return (
        <div
            ref={node}
            className={'item_filter'}
            onClick={toggleClass}
        >
            <div className="title">
                <p className="title_p">{props.title}</p>
                <i className="fas fa-chevron-down fa-sm"></i>
            </div>
            <div className="box-select">
                2
            </div>
        </div>
    )

}
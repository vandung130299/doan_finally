import React, { useEffect, useRef, useState } from 'react'
import './Filter.scss'

/**
* @author
* @function Filter
**/


export const Filter = (props) => {
    const [active, setActive] = useState(false);

    const node = useRef();
    useEffect(() => {
        //  thêm khi đã mount
        document.addEventListener("mousedown", handleClick);
        // dọn dẹp
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    },[])
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // return;
            const currentState = active;
            setActive(!currentState)

        } else {
            // alert('you clicked outside!')
            // outside
            setActive(false)
        }

    };
    return (
        <div
            ref={node}
            className={active ? 'show_filter item_filter' : 'item_filter'}
            handleClick="true"
        >

            {
                !props.sort_link ?
                    <>
                        <div className="title">
                            <p className="title_p">{props.title}</p>
                            <i className="fas fa-chevron-down fa-sm"></i>
                        </div>
                        <div className="box-select">
                            {props.listItem && props.listItem.map((item,index) =>
                                <div key={index} className="item">
                                    <a href="https://quantrimang.com/mot-so-thuoc-tinh-xu-ly-text-trong-css-163460" className="">{item}</a>
                                </div>
                            )}
                        </div>
                    </>
                    : <a href={props.sort_link} className="title">
                        <p className="title_p">{props.title}</p>
                        <i className="fas fa-chevron-down fa-sm"></i>
                    </a>
            }

        </div>
    )

}
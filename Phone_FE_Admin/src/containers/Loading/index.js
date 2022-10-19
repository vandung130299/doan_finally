import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./style.css";
const Loading = (props) => {
    return (
      <div className='loading-modal'>
        <Spinner className='loading' animation="border" />;
      </div>
    )
}

export default Loading
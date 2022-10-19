import React, { useEffect, useState } from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import './style.css';


function Login(props) {
  const [isSwitchForm, setIsSwitchForm] = useState(true);
  return (
    <React.Fragment>
      <input type="checkbox" hidden id="login_check" checked={isSwitchForm} />
      <input type="checkbox" hidden id="register_check" checked={!isSwitchForm} />
      <div className="modal modal_register">
        <label className="modal__overlay">
        </label>
        <SignUp
          isSwitchForm={isSwitchForm}
          setIsSwitchForm={setIsSwitchForm}
          onRegister={props.onRegister} />
      </div>
      <div className="modal modal_login">
        <label className="modal__overlay">
        </label>
        <SignIn
          isSwitchForm={isSwitchForm}
          setIsSwitchForm={setIsSwitchForm}
          onLogin={props.onLogin} />
      </div>
    </React.Fragment>
  );
}

export default Login
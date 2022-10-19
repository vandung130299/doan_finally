import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Validator from '../../Validate';
import { login } from '../../actions';

function SignIn(props) {
  const [user, setUser] = useState({
    email: 'cobebandiem@gmail.com',
    password: '123456'
  });

  const dispatch = useDispatch();

  let onChangeForm = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    setUser({
      ...user,
      [name]: value
    });
  }
  useEffect(() => {
    Validator({
      form: '#login-form',
      rules: [
        Validator.isRequired('#email'),
        Validator.isRequired('#password'),
      ],
      messageElement: '.form-message',
      onSubmit: function (user) {
        console.error(user)
        dispatch(login(user));
      }
    });
  }, [])
  return (
    <div className="modal__body">
      <div className="modal__inner">
        <div className="auth-form login-form">
          <form id="login-form" className="auth-form__container">
            <div className="auth-form_header">
              <h3 className="auth-form__heading">Đăng nhập</h3>
              <span
                className="auth-form__switch-btn"
                htmlFor="register_check"
                onClick={() => props.setIsSwitchForm(false)}
              >Đăng ký</span>
            </div>
            <div className="auth-form__form">
              <div className="auth-form__group">
                <input
                  name="email"
                  id="email"
                  onChange={onChangeForm}
                  type="text"
                  className="auth-form__input"
                  placeholder="Email của ban"
                  value={user.email}
                />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input
                  name="password"
                  id="password"
                  onChange={onChangeForm}
                  type="password"
                  className="auth-form__input"
                  placeholder="Mật khẩu của ban"
                  value={user.password}
                />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
            </div>
            <div className="auth-form__aside">
              <div className="auth-form__help">
                <a href="" className="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                <span className="auth-form__help-separate"></span>
                <a href="" className="auth-form__help-link">Cần trợ giúp?</a>
              </div>
            </div>
            <div className="auth-form__controls">
              <button type="submit" className="btn btn--primary">ĐĂNG NHẬP</button>
            </div>
          </form>
          <div className="auth-form__socials">
            {/* <a href="" className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
              <i className="auth-form__socials-icon fab fa-facebook-square"></i>
              <span className="auth-form__socials-title">Kết nối với Facebook</span>
            </a>
            <a href="" className="auth-form__socials--google btn btn--size-s btn--with-icon">
              <i className="auth-form__socials-icon-gg fab fa-google"></i>
              <span className="auth-form__socials-title">Kết nối với Google</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
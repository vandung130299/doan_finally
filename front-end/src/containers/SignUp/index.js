import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Validator from '../../Validate';
import axios from "../../utils/axios";
import { toast } from 'react-toastify';

function SignUp(props) {
  const [user, setUser] = useState({
    email: '',
    name: '',
    username: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

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
      form: '#register-form',
      rules: [
        Validator.isRequired('#email'),
        Validator.isRequired('#name'),
        Validator.isRequired('#username'),
        Validator.isRequired('#phone'),
        Validator.isRequired('#address'),
        Validator.isRequired('#password'),
      ],
      messageElement: '.form-message',
      onSubmit: function (user) {
        console.log(user);
        axios.post('/auth/signup', { ...user })
          .then(res => {
            console.log(res);
            if (res.data.success) {
              toast.success('Đăng ký tài khoản thành công!');
              props.setIsSwitchForm(!props.isSwitchForm);
            } else {
              toast.error(res.data.message);
            }
          });
      }
    });
  }, [])
  return (
    <div className="modal__body">
      <div className="modal__inner">
        <div className="auth-form register-form">
          <form id="register-form" className="auth-form__container">
            <div className="auth-form_header">
              <h3 className="auth-form__heading">Đăng ký</h3>
              <span className="auth-form__switch-btn" onClick={() => props.setIsSwitchForm(!props.isSwitchForm)}>Đăng nhập</span>
            </div>
            <div className="auth-form__form">
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="email" name="email" value={user.email} onChange={onChangeForm} placeholder="Email của bạn" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="name" name="name" value={user.firstName} onChange={onChangeForm} placeholder="Name" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="username" name="username" value={user.username} onChange={onChangeForm} placeholder="Username" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="address" name="address" value={user.address} onChange={onChangeForm} placeholder="Địa chỉ của bạn" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="phone" name="phone" value={user.phone} onChange={onChangeForm} placeholder="Số điện thoại" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="password" className="auth-form__input" id="password" name="password" value={user.password} onChange={onChangeForm} placeholder="Mật khẩu của bạn" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
            </div>
            <div className="auth-form__aside">
              <p className="auth-form__text">
                <span>bằng việc đăng ký, bạn đã đồng ý với phone-shop về</span><br />
                <a className="auth-form__text-link" href="">Điều khoản dịch vụ</a>
                <span> & </span>
                <a className="auth-form__text-link" href="">Chính sách bảo mật</a>
              </p>
            </div>
            <div className="auth-form__controls">
              <button type="submit" className="btn btn--primary">ĐĂNG KÝ</button>
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

export default SignUp;
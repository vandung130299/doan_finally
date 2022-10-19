import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Validator from '../../Validate';
import axios from "../../utils/axios";
import { toast } from 'react-toastify';

function SignUp(props) {
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
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
      form: '#register-form',
      rules: [
        Validator.isRequired('#email'),
        Validator.isRequired('#firstName'),
        Validator.isRequired('#lastName'),
        Validator.isRequired('#contactNumber'),
        Validator.isRequired('#address'),
        Validator.isRequired('#password'),
      ],
      messageElement: '.form-message',
      onSubmit: function (user) {
        axios.post('/signup', { ...user })
          .then(res => {
            if (res.status === 201) {
              toast.success('Đăng ký tài khoản thành công!');
              props.setIsSwitchForm(!props.isSwitchForm);
            } else {
              toast.error('Đăng ký tài khoản thất bại!');
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
                <input type="text" className="auth-form__input" id="firstName" name="firstName" value={user.firstName} onChange={onChangeForm} placeholder="First name" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="lastName" name="lastName" value={user.lastName} onChange={onChangeForm} placeholder="Last name" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="address" name="address" value={user.address} onChange={onChangeForm} placeholder="Địa chỉ của bạn" />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" id="contactNumber" name="contactNumber" value={user.contactNumber} onChange={onChangeForm} placeholder="Số điện thoại" />
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
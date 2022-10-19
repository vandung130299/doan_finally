import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axios from "./../utils/axios";
import Validator from './../Validate';

function ForGotPasswordContainer(props) {
  const [user, setUser] = useState({
    newPassword: '',
    confirmPassword: '',
    oldPassword: ''
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
      form: '#forgot-password-form',
      rules: [
        Validator.isRequired('#oldPassword'),
        Validator.isRequired('#newPassword'),
        Validator.isRequired('#confirmPassword'),
        Validator.isConformed('#confirmPassword', () => { return user.newPassword })
      ],
      messageElement: '.form-message',
      onSubmit: function (user) {
        axios.post('/user/updatePassword', { ...user })
        .then(res => {
          if (res.status === 201) {
            toast.success('Đổi mật khẩu thành công!'); 
            props.setIsForgotPassword(false);
          } else {
            toast.error('Kiểm tra lại mật khâu cũ!');
          }
        });
      }
    });
  }, [user.newPassword])
  return (
    <div className="modal__body">
      <div className="modal__inner">
        <div className="auth-form login-form">
          <form id="forgot-password-form" className="auth-form__container">
            <div className="auth-form_header">
              <h3 className="auth-form__heading">Đổi mật khẩu</h3>
            </div>
            <div className="auth-form__form">
              <div className="auth-form__group">
                <input
                  name="oldPassword"
                  id="oldPassword"
                  onChange={onChangeForm}
                  type="text"
                  className="auth-form__input"
                  placeholder="Mật khẩu cũ của bạn"
                  value={user.oldPassword}
                />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input
                  name="newPassword"
                  id="newPassword"
                  onChange={onChangeForm}
                  type="text"
                  className="auth-form__input"
                  placeholder="Mật khẩu mới của bạn"
                  value={user.newPassword}
                />
                <span style={{ color: "red" }} className="form-message">&nbsp;</span>
              </div>
              <div className="auth-form__group">
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={onChangeForm}
                  type="text"
                  className="auth-form__input"
                  placeholder="Xác nhận lại mật khẩu mới"
                  value={user.confirmPassword}
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
              <button type="button" style={{ color: '#00483d', backgroundColor: 'white', borderColor: '#00483d', marginRight: 15 }} className="btn" onClick={() => props.setIsForgotPassword(false)}>Hủy</button>
              <button type="submit" style={{ color: 'white' }} className="btn btn--primary">Lưu thay đổi</button>
            </div>
          </form>
          <div className="auth-form__socials">
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForGotPasswordContainer;
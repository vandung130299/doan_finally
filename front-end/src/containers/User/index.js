import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Validator from '../../Validate';
import { updateUser } from '../../actions';

function User(props) {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    Validator({
      form: '#form-1',
      rules: [
        Validator.isRequired('#name'),
        Validator.isRequired('#email'),
        Validator.isRequired('#phone'),
        Validator.isRequired('#address'),
      ],
      messageElement: '.form-message',
      onSubmit: function (data) {
        dispatch(updateUser(data));
      }
    });
  }, [])

  useEffect(() => {
    setUser(auth.user);
  }, [auth.user])

  let onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    setUser({
      ...user,
      [name]: value
    });
  }
  const { name, email, address, phone } = user;
  return (
    <form id="form-1">
      <br />
      <div className="form-group">
        <label>Email :</label>
        <input onChange={onChange} id="email" name="email" type="text" className="form-control" disabled value={email} />
        <span style={{ color: "red" }} className="form-message">&nbsp;</span>
      </div>
      <div className="form-group">
        <label>Name :</label>
        <input onChange={onChange} id="name" name="name" type="text" className="form-control" value={name} />
        <span style={{ color: "red" }} className="form-message">&nbsp;</span>
      </div>
      <div className="form-group">
        <label>Phone :</label>
        <input onChange={onChange} id="phone" name="phone" type="text" className="form-control" value={phone} />
        <span style={{ color: "red" }} className="form-message">&nbsp;</span>
      </div>
      <div className="form-group">
        <label>Address :</label>
        <input onChange={onChange} id="address" name="address" type="text" className="form-control" value={address} />
        <span style={{ color: "red" }} className="form-message">&nbsp;</span>
      </div>
      <div className="">
        <button type="submit" className="btn btn-warning">Lưu</button>
      </div>
    </form>
  );
}

export default User;
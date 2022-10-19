import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Validator from '../../Validate';
import { updateUser } from '../../actions';

function User(props) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
  });
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    Validator({
      form: '#form-1',
      rules: [
        Validator.isRequired('#firstName'),
        Validator.isRequired('#lastName'),
        Validator.isRequired('#contactNumber'),
        Validator.isRequired('#address'),
      ],
      messageElement: '.form-message',
      onSubmit: function (data) {
        dispatch(updateUser(data));
      }
    });
  }, [])

  useEffect(() => {
    console.error(auth.user)
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
  const { firstName, lastName, address, contactNumber } = user;
  return (
    <form id="form-1">
      <br />
      <div className="form-group">
        <label>First Name :</label>
        <input onChange={onChange} id="firstName" name="firstName" type="text" className="form-control" value={firstName} />
        <span style={{ color: "red" }} className="form-message">&nbsp;</span>
      </div>
      <div className="form-group">
        <label>Last Name :</label>
        <input onChange={onChange} id="lastName" name="lastName" type="text" className="form-control" value={lastName} />
        <span style={{ color: "red" }} className="form-message">&nbsp;</span>
      </div>
      <div className="form-group">
        <label>Phone :</label>
        <input onChange={onChange} id="contactNumber" name="contactNumber" type="text" className="form-control" value={contactNumber} />
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
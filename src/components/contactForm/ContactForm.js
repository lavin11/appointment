import React from "react";

export const ContactForm = (props) => {

  const handleNameChange = ({target}) => {
    const {value} = target;
    props.setName(value);
  };

  const handlePhoneChange = ({target}) => {
    const {value} = target;
    props.setPhone(value);
  };

  const handleEmailChange = ({target}) => {
    const {value} = target;
    props.setEmail(value);
  };

  /*
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
  */

  return (
    <form onSubmit = {props.handleSubmit}>
      <input type="text" placeholder = "Enter name" value = {props.name} onChange = {handleNameChange}/>
      <input type="test" placeholder = "Enter phone" value = {props.phone} onChange = {handlePhoneChange} /* pattern = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" */  />
      <input type="text" placeholder = "Enter Email" value = {props.email} onChange = {handleEmailChange}/>
      <input type="submit" value= "Submit" />
    </form>
  );
};

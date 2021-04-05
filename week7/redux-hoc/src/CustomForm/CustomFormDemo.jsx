import React from "react";
import CustomForm from "./CustomFormHOC.jsx";
import { AwesomeButton } from "react-awesome-button";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    props.onChange(inputName, inputValue);
  };

  return (
    <div className="col-md-2">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Input name"
        />
        <input
          type="email"
          name="email"
          className="form-control my-3"
          placeholder="Input email"
        />
        <AwesomeButton type="secondary" className="mb-3">
          ☑ Submit
        </AwesomeButton>
      </form>
    </div>
  );
};

const CustomFormDemo = (props) => {
  const FormWithCustom = CustomForm({ contact: { name: "", email: "" } })({
    propName: "contact",
    propListName: "contactList",
  })(Form);
  return (
    <div>
      <FormWithCustom {...props} />
    </div>
  );
};

export default CustomFormDemo;

import React, { useState } from "react";
import "../defaultPages/componentsForPages/FormInputStyles.css";

function LoginRegisterComponent(props) {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, alt, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
      };

  return (
    <div className='form-input'>
        <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={(focused && !props.reset).toString()}
        errorr = {(props.error && alt === true).toString()}
      />
      { 
        !props.reset && <>
        {alt ? <span>{props.error ? props.errorMessageAlt : errorMessage}</span> : 
        <span>{errorMessage}</span>}</>
      }
      
    </div>

  );
}

export default LoginRegisterComponent;

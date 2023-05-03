import React from "react";

function RadioGroup(props) {
  return (
    <div>
      <label>{props.label}</label>
      <div style={{ display: "flex"}}>
        {props.options.map((option) => (
          <div key={option.value} style={{ marginRight: "30px" }}>
            <input 
              type="radio" 
              id={option.id} 
              name={props.name} 
              value={option.value}
              checked={option.value === props.selectedOption}
              onChange={() => props.onChange(option.value)} 
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;



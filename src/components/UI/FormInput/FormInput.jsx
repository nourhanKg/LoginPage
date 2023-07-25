import { useState } from "react";
function FormInput(props) {
    const [enteredValue, setEnteredValue] = useState("");
    const [isInputTouched, setisInputTouched] = useState(false);
    const validate = props.validation;
    const validInput = validate(enteredValue);
    const invalidInput = !validInput && isInputTouched;
    const inputChangeHandler = function(e) {
        setEnteredValue(e.target.value);
        validate(e.target.value);
    }
    const inputBlurHandler = function(e) {
        setisInputTouched(true);
    }
    return (
        <>
            <div className="input">
            <input 
                onChange={inputChangeHandler} 
                onBlur={inputBlurHandler} 
                type={props.type} 
                className={`input-element ${invalidInput? "invalid" : ""} ${props.className}`}
                placeholder={props.placeholder}>
            </input>
            {props.icon && <span className="input-icon">{props.icon}</span>}
            </div>
            {invalidInput && <p className="input-invalid-msg">{props.invalidMsg}</p>}
        </>
    )
}
export default FormInput;
import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)


  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !nameIsValid && enteredNameTouched;

  const enterNameHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

  }
  const formSubmittedHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!nameIsValid) {
      return
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmittedHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName}
          type='text'
          id='name'
          onChange={enterNameHandler}
          onBlur={nameInputBlurHandler} />
        {nameInputIsInValid && <p className="error-text">Name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

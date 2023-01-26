import { useEffect, useState } from "react";
import userInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const { value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
    valueChangeHandler: enterNameHandler,
    inputBlurHandler: nameInputBlurHandler
  } = userInput(value => value.trim() !== '');


  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const enterEmailHandler = (event) => {
    setEnteredEmail(event.target.value)
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)

  }
  const formSubmittedHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // if (!enteredNameIsValid) {
    //   return
    // }
    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetNameInput();
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmittedHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName}
          type='text'
          id='name'
          onChange={enterNameHandler}
          onBlur={nameInputBlurHandler} />
        {nameInputHasError && <p className="error-text">Name is not valid</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input value={enteredEmail}
          type='text'
          id='name'
          onChange={enterEmailHandler}
          onBlur={emailInputBlurHandler} />
        {nameInputHasError && <p className="error-text">Please Enter a email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

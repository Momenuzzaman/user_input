
import userInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const { value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
    valueChangeHandler: enterNameHandler,
    inputBlurHandler: nameInputBlurHandler
  } = userInput(value => value.trim() !== '');


  const { value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    reset: emailInputReset,
    valueChangeHandler: enterEmailHandler,
    inputBlurHandler: emailInputBlurHandler
  } = userInput(value => value.includes('@'));
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmittedHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    emailInputReset();
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
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
        {emailInputHasError && <p className="error-text">Please Enter a email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const nameRef = useRef()

  useEffect(() => {
    if (nameIsValid) {
      console.log('name is valid');
    }
  }, [nameIsValid]);

  const enterNameHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setNameIsValid(false);
      return
    }
  }
  const formSubmittedHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setNameIsValid(false);
      return
    }
    setNameIsValid(true);

    const enteredValueName = nameRef.current.value
    console.log(enteredValueName)
    setEnteredName('');
  }
  const nameInputIsInvalid = !nameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmittedHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName}
          ref={nameRef}
          type='text'
          id='name'
          onChange={enterNameHandler}
          onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

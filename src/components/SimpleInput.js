import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const enterNameHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

  }

  const enterEmailHandler = (event) => {
    setEnteredEmail(event.target.value)
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)

  }
  const formSubmittedHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return
    }
    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';
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
        {nameInputIsInValid && <p className="error-text">Name is not valid</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input value={enteredEmail}
          type='text'
          id='name'
          onChange={enterEmailHandler}
          onBlur={emailInputBlurHandler} />
        {nameInputIsInValid && <p className="error-text">Please Enter a email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// import { useState } from 'react';

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);

//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

//   const enteredNameIsValid = enteredName.trim() !== '';
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//   const enteredEmailIsValid = enteredEmail.includes('@');
//   const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

//   let formIsValid = false;

//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const emailInputChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//   };

//   const emailInputBlurHandler = (event) => {
//     setEnteredEmailTouched(true);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnteredNameTouched(true);

//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName);

//     // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
//     setEnteredName('');
//     setEnteredNameTouched(false);

//     setEnteredEmail('');
//     setEnteredEmailTouched(false);
//   };

//   const nameInputClasses = nameInputIsInvalid
//     ? 'form-control invalid'
//     : 'form-control';

//   const emailInputClasses = enteredEmailIsInvalid
//     ? 'form-control invalid'
//     : 'form-control';

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input
//           type='text'
//           id='name'
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputIsInvalid && (
//           <p className='error-text'>Name must not be empty.</p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor='email'>Your E-Mail</label>
//         <input
//           type='email'
//           id='email'
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//           value={enteredEmail}
//         />
//         {enteredEmailIsInvalid && (
//           <p className='error-text'>Please enter a valid email.</p>
//         )}
//       </div>
//       <div className='form-actions'>
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

import React, { useState, useRef } from 'react';
import SignIn from './SignIn.js';
import './SignUp.css';

function SignUp({mail}) {
    const [showAlert, setShowAlert] = useState(false);
    const [signIn, setSignIn] = useState(false);
  
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  
    function handleSignUp(event) {
      event.preventDefault();
      const mail_element = document.getElementById('email');
      if (mail_element.value === '') {
        setShowAlert(true);
        document.getElementById('alert').innerHTML = 'Email is required!';
        mail_element.style.borderBottom = '2px solid orange';
      } else {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(mail_element.value)) {
          document.getElementById('alert').innerHTML = 'Invalid email address!';
          mail_element.style.borderBottom = '2px solid orange';
          setShowAlert(true);
        }
      }
    }

    return (
        <div className="signUp__root">
          {signIn ? <SignIn /> :
          <>
            <h1 className="signUp__header"> Registrirajte se </h1>
            <form>
              <input ref={emailRef} id="email" type="mail" className="signUp__input__mail" placeholder="Email" />
              <div id="alert" className={`alertSignUp login__body__alert ${showAlert && "show__alert"}`} />
              <input ref={passwordRef} type="password" className="signUp__input__password" placeholder="Password" />
              <button onClick={handleSignUp} type="submit" className="signUp__button"> Sign Up </button>
              <div id="alert__error" className={`alertSignUp alert__error login__body__alert ${showAlert && "show__alert"}`} />
              <h4 className="signIn__signUp"> 
                <span className="signUp__span__gray"> Već imate korisnički račun? </span>
                <span onClick={() => setSignIn(true)} className="signUp__span__white"> Prijavite se </span>
              </h4>
            </form>
          </>
          }
        </div>
    )
}

export default SignUp;
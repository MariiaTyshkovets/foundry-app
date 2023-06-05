import './Auth.css';
import { signInWithGoogle } from '../../services/firebase';
import { Dispatch, SetStateAction } from 'react';

interface FunctionSetSignIn {
  setSignIn: Dispatch<SetStateAction<boolean>>;
}

function Auth(prop: FunctionSetSignIn) {
  
  const signIn = async() => {
    await signInWithGoogle().then(() => {
      localStorage.getItem("name") !== null && localStorage.getItem("email") !== null && localStorage.getItem("profilePic") !== null ? prop.setSignIn(false) : prop.setSignIn(true);
    });
  }

  return (
    <div className="auth">
      <div className='blur'>
        <h2>Щоб почати користуватись застосунком пройдіть аутентифікацію :)</h2>
        <div className='btn-container'>
          <button className='google' onClick={signIn}>
            <img src={require("../../assets/images/icon-google.png")} alt="google icon" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
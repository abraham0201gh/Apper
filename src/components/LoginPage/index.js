import ReactSignupLoginComponent from 'react-signup-login-component';
 
const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      alert('Login callback, see log on the console to see the data.');
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
    };
    return (
        <div>
            <ReactSignupLoginComponent
                title="My awesome company"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};

 
export default LoginPage;


// NOTE:  See webpage below for "Required props"
// https://www.npmjs.com/package/react-signup-login-component
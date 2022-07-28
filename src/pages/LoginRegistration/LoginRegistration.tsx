import React, { FC, useEffect, FormEvent } from 'react';
import { Button, TextField, Typography, styled } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useLoginForm } from './hooks';
import { observer } from 'mobx-react';
import { useUserStore } from '#/store/useStores';
import GoogleLogin from 'react-google-login';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Login.scss';
const Form = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(5),
  display: 'flex',
  flexWrap: 'wrap',
  width: '50%',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: 'auto',
  marginBottom: theme.spacing(2),
  flex: '1 0 100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  flex: '1 0 100%',
  padding: '9px 16px',
}));

const ErrorComponent = styled(Typography)(() => ({
  flex: '1 0 100%',
}));

interface ILoginRegistrationProps {
  login?: boolean;
}

const Login: FC<ILoginRegistrationProps> = ({ login }) => {
  const { email, setEmail, firstName, password, setName, setPassword } = useLoginForm();

  const history = useHistory();
  const userStore = useUserStore();
  const error = userStore.error;
  const [enable, setEnable] = React.useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const onSuccess = () => history.push('/dashboard');
    if (login) {
      userStore.logIn(email, password, onSuccess);
    } else {
      userStore.register(firstName, email, password, onSuccess);
    }
  };

  useEffect(() => {
    userStore.resetError();
  }, [login]);

  const responseGoogle = (response: any) => {
    // console.log(response);
  };
  const viewPass = () => {
    setEnable(true);
  };
  const closePass = () => {
    setEnable(false);
  };
  return (
    <div className="login_form">
      <Form onSubmit={handleSubmit}>
        <div className="login_title">
          <h1>Login</h1>
          <span>Enter your email and password to login!</span>
        </div>
        <GoogleLogin
          className="login_with_gmail"
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login With G-mail"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <div className="or">
          <Divider>OR</Divider>
        </div>
        {!login ? (
          <StyledTextField
            className="login_txt_feild"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            label="Name"
            type="text"
            error={error?.fields?.firstName}
            variant="filled"
            required
          />
        ) : null}
        <StyledTextField
          className="login_txt_feild"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          label="Email"
          type="email"
          error={error?.fields?.email}
          variant="filled"
          required
        />
        <StyledTextField
          className="login_txt_feild"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          label="Password"
          type={!enable ? 'password' : 'text'}
          autoComplete="on"
          error={error?.fields?.password}
          variant="filled"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {enable === true ? (
                  <RemoveRedEyeIcon className="coursor" onClick={closePass} />
                ) : (
                  <VisibilityOffIcon className="coursor" onClick={viewPass} />
                )}
              </InputAdornment>
            ),
          }}
        />
        <div className="flex spc_btw">
          <FormControlLabel
            className="ucolor"
            control={<Checkbox defaultChecked />}
            label="Keep Me Logged-In"
          />
          <p className="forPass">Forgot Password?</p>
        </div>
        <StyledButton
          disabled={!email || !password}
          variant="contained"
          type="submit"
          color="primary"
          className="login_btn"
        >
          Login
        </StyledButton>
        <div className="register flex">
          <p className="ucolor">Not registered yet? </p>&nbsp;
          <a href="">Create an Account</a>
        </div>
        {userStore.error?.message ? (
          <ErrorComponent color="error" variant="body1">
            {userStore.error?.message}
          </ErrorComponent>
        ) : null}
        {
          //!login ? (
          //<Typography variant="body2">
          //Already have an account? <Link to="/login">Log in here!</Link>
          //</Typography>
          //) : (
          //<Typography variant="body2">
          //Don't have an account? <Link to="/register">Register here!</Link>
          //</Typography>
          //)
        }
      </Form>
    </div>
  );
};

export default observer(Login);

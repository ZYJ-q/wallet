'use client';
import { ReactNode, useCallback, useState } from 'react';

// material-ui Dialog, DialogActions, DialogContent, DialogTitle, Button,
import { Box, Grid, Stack } from '@mui/material';

// project import
// import AuthFooter from 'components/cards/AuthFooter';
import LoginLogo from 'components/logo/login_logo';
import AuthCard from './AuthCard';
// import useConfig from 'hooks/useConfig';
// import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';
import { useWalletContext } from 'contexts/wallet';
// import { useIntl } from 'react-intl';
import './layout.css';
import { setName, setToken } from 'utils/token';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
// import Localization from 'layout/MainLayout/Header/HeaderContent/Localization';

interface Props {
  children: ReactNode;
}

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }: Props) => {
  // const { i18n } = useConfig()
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: any) => {
  //   setAge(event.target.value);
  // };

  // const localization = useMemo(() => <Localization />, [i18n]);
  // const CssTextField = styled(TextField)({
  //   '& label.Mui-focused': {
  //     color: '#A0AAB4'
  //   },
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: '#B2BAC2'
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: '#E0E3E7'
  //     },
  //     '&:hover fieldset': {
  //       borderColor: '#B2BAC2'
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: '#6F7E8C'
  //     }
  //   }
  // });
  // const intl = useIntl();
  const { isLoggedIn, login, logout, username, scaAddress } = useWalletContext();
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const auth = useAuth();
  const navigate = useNavigate();
  const openModal = useCallback(() => {
    setIsLoggingIn(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsLoggingIn(false);
  }, []);

  const handleLogout = useCallback(async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  }, [logout]);

  const handleLogin = useCallback(async () => {
    console.log('email', email);
    setIsLoggingIn(false);

    // const res = await Address.getAddress();
    // console.log('res', res);

    await login(email);
    if (isLoggingIn) {
      console.log({ token: email as string });
      console.log({ username: email as any });
      setToken({ token: email as string });
      setName({ username: email as any });
      console.log('登录成功');
      await auth.login(isLoggingIn);
      navigate('/debot/home', { replace: true });
    }
    setEmail('');
  }, [auth, email, isLoggingIn, login, navigate]);

  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  }, []);

  // const goUsername = () => {
  //   window.open(`https://sepolia.etherscan.io/address/${scaAddress}`);
  // };

  return (
    <Box sx={{ minHeight: '50vh' }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{
          minHeight: '50vh'
        }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3, mr: 3 }}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <LoginLogo />
            {/* <FormControl sx={{ width: '10%' }}>
              <InputLabel id="demo-simple-select-label">Lang</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value='en'>En</MenuItem>
                <MenuItem value='zh'>Zh</MenuItem>
              </Select>
            </FormControl> */}

            {/* <Box>
              {isLoggedIn ? (
                <Button variant="contained" onClick={goUsername}>
                  {username || `${intl.formatMessage({ id: 'Logged In!' })}`}
                </Button>
              ) : (
                <Button variant="contained" disabled={isLoggingIn} onClick={openModal}>
                  {isLoggingIn ? `${intl.formatMessage({ id: 'Logging In' })}` : `${intl.formatMessage({ id: 'Log In' })}`}
                  {isLoggingIn && <span className="loading loading-spinner loading-md"></span>}
                </Button>
              )}
              {isLoggedIn && (
                <Button onClick={handleLogout}>
                  {isLoggingOut ? `${intl.formatMessage({ id: 'Logging Out' })}` : `${intl.formatMessage({ id: 'Log Out' })}`}
                  {isLoggingOut && <span className="loading loading-spinner loading-md"></span>}
                </Button>
              )}
            </Box> */}
            <div className="flex flex-row items-center gap-[12px] max-md:flex-col max-md:text-center">
              {isLoggedIn ? (
                <a
                  href={`https://sepolia.etherscan.io/address/${scaAddress}`}
                  target="_blank"
                  className="btn text-white bg-gradient-1 disabled:text-white transition ease-in-out duration-500 transform hover:scale-110 max-md:w-full"
                  rel="noreferrer"
                >
                  {username || 'Logged In!'}
                </a>
              ) : (
                <button
                  disabled={isLoggingIn}
                  onClick={openModal}
                  className="btn text-white bg-gradient-1 disabled:opacity-25 disabled:text-white transition ease-in-out duration-500 transform hover:scale-110 max-md:w-full"
                >
                  {isLoggingIn ? 'Logging In' : 'Log In'} With Email
                  {isLoggingIn && <span className="loading loading-spinner loading-md"></span>}
                </button>
              )}
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="btn text-white bg-gradient-2 disabled:opacity-25 disabled:text-white transition ease-in-out duration-500 transform hover:scale-110 max-md:w-full"
                >
                  {isLoggingOut ? 'Logging Out' : 'Log Out'}
                  {isLoggingOut && <span className="loading loading-spinner loading-md"></span>}
                </button>
              )}
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          {/* <AuthFooter /> */}
        </Grid>
      </Grid>
      {/* login pop-up modal */}
      <dialog className={`modal ${isLoggingIn && 'modal-open'}`}>
        <div className="modal-box flex flex-col gap-[12px]">
          <h3 className="font-bold text-lg">Enter your email!</h3>
          <input placeholder="email" onChange={onEmailChange} className="input border border-solid border-white" />
          <div className="flex flex-row justify-end max-md:flex-col flex-wrap gap-[12px]">
            <button
              onClick={handleLogin}
              className="btn bg-gradient-1 text-white transition ease-in-out duration-500 transform hover:scale-110"
            >
              Login
            </button>
            <button
              onClick={closeModal}
              className="btn bg-gradient-2 text-white transition ease-in-out duration-500 transform hover:scale-110"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
      {/* <Dialog open={isLoggingIn} onClose={closeModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <CssTextField placeholder="email" onChange={onEmailChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin}>
            <FormattedMessage id="Login" />
          </Button>
          <Button onClick={closeModal} autoFocus>
            <FormattedMessage id="Close" />
          </Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
};
export default AuthWrapper;

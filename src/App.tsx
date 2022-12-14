import React from 'react';
import 'regenerator-runtime/runtime';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'mobx-react';
import { red } from '@mui/material/colors';
import UserStore from './store/UserStore';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginRegistration from './pages/LoginRegistration';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Layout from './components/Layout';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './helpers/SnackbarUtils';
import DataTable from './pages/Data-Table/DataTable';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#066ace',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EBEBEB',
    },
  },
});

// type LayoutProps = {
//   children: React.ReactNode; // 👈️ type children
// };

// const Layout = (props: LayoutProps) => {
//   return <div>{props.children}</div>;
// };

const App = () => {
  const stores = {
    userStore: new UserStore(),
  };
  dayjs.extend(localizedFormat);
  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <SnackbarProvider maxSnack={5}>
          <SnackbarUtilsConfigurator />
          <Router>
            <Switch>
              <Layout>
                <Route path="/login">
                  <LoginRegistration login />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/datatable">
                  <DataTable />
                </Route>
                {
                  //<Route path="/register">
                  //<LoginRegistration />
                  //</Route>
                }
                <PrivateRoute path="/dashboard" component={Dashboard} />
              </Layout>
            </Switch>
          </Router>
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

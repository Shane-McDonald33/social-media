import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Welcome from './components/welcome';
import Login from './components/logButton';
import Home from './components/homeButton';
import SignUp from './components/signupButton';
import store from './dispatch/store';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <AppBar position="relative">
        <Toolbar>
          <Box color="#ffffff"display="flex" width={1080} alignItems="center">
            <h4><Link to='/'>LOOK@ME</Link></h4>
          </Box>
          <Box display="flex" width={100} alignItems="center">
            <Login/>
          </Box>
          <Box display="flex" width={100} alignItems="center">
            <Home/>
          </Box>
          <Box display="flex" width={100} alignItems="center">
            <Button component={Link} to='/'>SignUp</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route component={NoMatch}/>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import './App.scss';
import Signin from './Components/Sign-in/Index'
import Signup from './Components/Sign-up/Index'
import Dashboard from './Components/Dashboard/Index'
import Journal from './Components/Journal/Index'
import Trade from './Components/Trade/Index'
import Watchlist from './Components/Watchlist/Index'
import {  Route, Switch  } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig);


function App() {
  return (
    <>
   <StyledEngineProvider injectFirst>
     <CssBaseline/>
     <Switch>
     <Route exact path="/" component={Signin} />
     <Route path="/signup" component={Signup} />
     <Route path="/dashboard" component={Dashboard} />
     <Route path="/journal" component={Journal} />
     <Route path="/trade" component={Trade} />
     <Route path="/watchlist" component={Watchlist} />

   
     </Switch>
    </StyledEngineProvider>
    </>
  );
}

export default withAuthenticator(App)

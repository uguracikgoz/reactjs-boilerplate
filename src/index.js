import React              from 'react'
import ReactDOM           from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

// begin : import route files
import Login              from './Routes/Login'
import Page404            from './Routes/Page404'
import Dashboard            from './Routes/Dashboard'
// end   : import route files

// begin : Session management
import AuthEngine from './AuthEngine'
var Authed = new AuthEngine().loggedIn()
// end   : Session management

ReactDOM.render(
  <Router>
    <Switch>
      <Route        path="/"          exact component={Login}/>
      <Route        path="/login"     exact component={Login}/>
      <PrivateRoute path='/dashboard' exact component={Dashboard} authed={Authed}/>
      <Route        path="*"                component={Page404} />
    </Switch>
  </Router>
  ,document.getElementById('root')
)

function PrivateRoute({component: Component, authed, ...rest})
{
  return(
    <Route
      {...rest}
      render=
      {
        (props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />
      }
    />
  )
}

serviceWorker.register()
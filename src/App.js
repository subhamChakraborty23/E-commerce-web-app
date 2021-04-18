import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";



class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()

  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

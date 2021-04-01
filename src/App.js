import React from "react";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => {
  return (
    <div>
    <Link to='/shop/hats'>hats page</Link>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

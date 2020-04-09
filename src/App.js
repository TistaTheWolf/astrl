import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/Homepage/homepage.component.jsx";
import ShopPage from "./components/pages/shop/shop.component.jsx";
import Header from './components/header/header.component.jsx';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>Sneakers Page</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>Womens Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/womens" component={WomensPage} />
      </Switch>
    </div>
  );
}

export default App;

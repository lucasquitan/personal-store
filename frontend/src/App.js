import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand">
              shoes store
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sing In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart" component={CartScreen}/>
          <Route path="/signin" component={SignInScreen}/>
        </main>
        <footer className="row center">
        <i class="fa fa-instagram" aria-hidden="true" />
         lucasquitan
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

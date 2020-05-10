import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
class App extends React.Component {
  //unsubscribeFromAuth = null;

  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
    
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()})
    //     })
    //   }
    //   else {
    //     setCurrentUser(userAuth);
    //   }
    // })

  }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  // }

  render(){
    return (
      <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signIn' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div> 
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
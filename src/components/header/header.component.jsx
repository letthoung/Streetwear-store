import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionsContainer,
     OptionContainer} from './header.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainer as={Link} to='/shop'>SHOP</OptionContainer>
            <OptionContainer as={Link} to='/shop'>CONTACT</OptionContainer>
            {
                currentUser ? <OptionContainer onClick={() => auth.signOut()}>SIGN OUT</OptionContainer> 
                : <OptionContainer as={Link} to='/signIn'>SIGN IN</OptionContainer>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
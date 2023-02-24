import React from 'react';

/* asset */
import cartIcon from '../../assets/trolley-cart.png'

const Nav = ({action}) => {
    return (
        <nav className='nav'>
            <button onClick={action}>
                <img src={cartIcon} alt="cart" />
            </button>
        </nav>
    );
}

export default Nav;

import React, { useContext } from 'react';
import { NavLink, Link  } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { SHOP_ROUTE } from '../utils/consts';

const Navbar = observer(() => {
    const { user } = useContext(Context);
    return (
        <div className='navbar'>
            <NavLink className='navbar__logo' to={SHOP_ROUTE}>Smart Shop</NavLink>
            <nav className='navbar__body'>
                {user.isAuth ?
                <div className='navbar__row'>
                    <button className='navbar__button'>
                        <span className='navbar__text'>Admin page</span> 
                    </button>
                    <button className='navbar__button'>
                        <span className='navbar__text'>Log out</span>
                    </button>   
                </div>
                
                :
                <div className='navbar__row'>
                    <button className='navbar__button' onClick={() => user.setIsAuth(true)}>
                        <span className='navbar__text'>Log in</span>
                    </button>
                </div>
                }
            </nav> 
        </div>
       
    )
})

export default Navbar
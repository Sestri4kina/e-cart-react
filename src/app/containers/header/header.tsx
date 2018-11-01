import * as React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/header.css';
import {connect} from 'react-redux';
import {AppState} from '../../store';

interface HeaderProps {
    totalItems: number;
}

export const HeaderView = ({totalItems}: HeaderProps) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/cart'>
                            Cart
                            {
                                totalItems && 
                                <span className="cart-badge">{totalItems}</span>
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
        

export const Header = connect<
    Pick<HeaderProps, 'totalItems'>,
    {},
    {},
    AppState
>(
    ({cartState}: AppState) => ({totalItems: cartState.totalItems})
)(HeaderView)

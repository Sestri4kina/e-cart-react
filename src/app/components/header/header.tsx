import * as React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/header.css';

export const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </nav>
    </header>
)

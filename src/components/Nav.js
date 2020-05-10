import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import ListItem from './ListItem';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <List>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                <ListItem>
                    <Link to="/contact">Contact</Link>
                </ListItem>
            </List>
        </nav>
    )
}

export default Nav;
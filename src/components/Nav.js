import React from 'react';
import { Link } from 'react-router-dom';
import List from 'components/List';
import ListItem from 'components/ListItem';

class Nav extends React.Component {
    render() {
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
        );
    }
}

export default Nav;
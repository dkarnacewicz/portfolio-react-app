import React from 'react';
import 'assets/styles/components/ListItem.scss';

class ListItem extends React.Component {
    render() {
        const content = (this.props.text) ? this.props.text : this.props.children;

        return (
            <li className="list__item">
                {content}
                {this.props.children}
            </li>
        );
    }
}

export default ListItem;
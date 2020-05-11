import React from 'react';

class ListItem extends React.Component {
    render() {
        const content = (this.props.text) ? this.props.text : this.props.children;

        return (
            <li className="list__item">
                {content}
            </li>
        );
    }
}

export default ListItem;
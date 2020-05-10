import React from 'react';

function ListItem(props) {
    const content = (props.text) ? props.text : props.children;

    return (
        <li className="list__item">
            {content}
        </li>
    )
}

export default ListItem;
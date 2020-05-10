import React from 'react';

function List(props) {
    return (
        <ul className="list">
            {props.children}
        </ul>
    )
}

export default List;
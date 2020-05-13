import React from 'react';
import 'assets/styles/components/List.scss';

class List extends React.Component {
    render() {
        return (
            <ul className="list">
                {this.props.children}
            </ul>
        )
    }
}

export default List;
import React from 'react';

class Img extends React.Component {
    render() {
        const classes = 'img ' + this.props.className;
        return (
            <img src={this.props.src} alt={this.props.alt} className={classes} />
        );
    }
}

export default Img;
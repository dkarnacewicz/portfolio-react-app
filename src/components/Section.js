import React from 'react';
import "assets/styles/components/Section.scss";

class Section extends React.Component {
    render() {
        return (
            <section className="section">
                {this.props.children}
            </section>
        );
    }
}

export default Section;
import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>You are lovely.</p>
            </div>
        );
    }
}

export default HelloWorld;

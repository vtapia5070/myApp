import React from 'react';

class Footer extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            option: props.option || 'show all'
        };
    }

    render () {
        return (
            <div>
                <h2>Options:</h2>
                <div>Show All</div>
                <div>Show Active</div>
                <div>Show Complete</div>
            </div>
        );
    }
}

export default Footer;
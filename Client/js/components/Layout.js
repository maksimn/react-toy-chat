import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Maksim"};
    }
    
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

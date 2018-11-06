import React, { Component } from "react";

const Context = React.createContext({})

export class Provider extends Component {
    state = {
        contacts:
        [
            {
                id:1,
                name: 'shyma al sane',
                email: 'shyma@gmail.com',
                phone: '444-444-444'
            },
            {
                id:2,
                name: 'jumana al sane',
                email: 'jumana@gmail.com',
                phone: '444-444-444'
            },
            {
                id:3,
                name: 'rahma al sane',
                email: 'rahma@gmail.com',
                phone: '444-444-444'
            }
        ]
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;
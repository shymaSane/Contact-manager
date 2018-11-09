import React, { Component } from "react";

const Context = React.createContext({})

const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.filter(contact =>  contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
        
            }
        default: 
            return state;    
    }
}

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
        ],

        dispatch: action => this.setState(state => reducer(state, action))
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
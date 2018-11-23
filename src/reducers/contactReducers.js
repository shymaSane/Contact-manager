
import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT} from '../actions/type'

//each reducers has its intial state
const initialState = {
    contacts: [
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
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state, ...action.payload]
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(contact =>  contact.id !== action.payload)
            }
        default:
            return state
    }
}
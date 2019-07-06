import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from "../Types";

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "aaa",
                email: "aaa@aaa.aaa",
                phone: "111-111-111",
                type: "personal"
            },
            {
                id: 2,
                name: "bbb",
                email: "bbb@bbb.bbb",
                phone: "222-222-222",
                type: "personal"
            },
            {
                id: 3,
                name: "ccc",
                email: "ccc@ccc.ccc",
                phone: "333-333-333",
                type: "professional"
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // add contact

    // delete contact

    // set current contact

    // clear current contact

    // update contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;

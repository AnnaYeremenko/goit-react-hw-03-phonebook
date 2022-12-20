import React, { Component } from "react";
import { nanoid } from 'nanoid';

import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import {Title, ContactsTitle} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (name, number) => {

    const searchName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase().trim() === name.toLocaleLowerCase()
    );
    if (searchName) {
      return alert(`${name} is alredy in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id: nanoid(), name, number}],
    }));
  };
  changeFilter = evt => {
    this.setState({ filter:evt.target.value });
  };

  getVizibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
      );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Title>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

      <ContactsTitle>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={this.getVizibleContact()}
            onDelete={this.deleteContact}
          />
        )}
        </ContactsTitle>
      </Title>
    );
  }

}
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    userUpdate: null,
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = this.state.contacts.some(contact => contact.name === name);
    contact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  renameContact = id => {
    const { name } = this.state.contacts.find(contact => contact.id === id);

    this.setState({ userUpdate: name });
  };

  updateName = ({ name, id }) => {
    const contacts = this.state.contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, name };
      }
      return contact;
    });

    this.setState({ contacts, userUpdate: null });
  };

  render() {
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <Contacts
            contacts={filtered}
            deleteContact={this.deleteContact}
            renameContact={this.renameContact}
            userUpdate={this.state.userUpdate}
            onSubmit={this.updateName}
          />
        </Section>
      </>
    );
  }
}

export default App;

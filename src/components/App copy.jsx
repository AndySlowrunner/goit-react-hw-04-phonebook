import { Component } from "react";
import { StyledDiv } from "./ContactForm/StyledForm";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./ContactFilter/ContactFilter";

export class App extends Component {   
    // state = {
    //     contacts: [
    //         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    //     ],
    //     filters: '',
    // };
    
    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsContacts = JSON.parse(contacts);

        if (parsContacts) {
            this.setState({contacts: parsContacts})
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.contacts !== prevState.contacts){
    //         localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    //     }
    // };

    // addContact = newContact => {
    //     const isExist = this.state.contacts.some(contact => contact.name === newContact.name);
        
    //     if (isExist) {
    //         alert(`${newContact.name} is already in contacts.`);
    //         return
    //     };
        
    //     this.setState(prevState => {
    //         return {
    //             contacts: [...prevState.contacts, newContact]
    //         }
    //     });
    // };

    // changeTopicFilter = (newTopic) => {
    //     this.setState({
    //         filters: newTopic
    //     });
    // };

    // handleDelete = (userId) => {
    //     this.setState(prevState => {
    //         return {
    //             contacts: prevState.contacts.filter(contact => contact.id !== userId),
    //         };
    //     });
    // };

    // render() {
    //     const { contacts, filters } = this.state;

    //     const visibleContacts = contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filters.toLowerCase()));
        
    //     return (
    //         <StyledDiv>
    //             <h1>Phonebook</h1>
    //             <ContactForm onAdd={this.addContact} />
    //             <h2>Contacts</h2>
    //             <Filter
    //                 value={filters}
    //                 onChange={this.changeTopicFilter}
    //             />
    //             <ContactList
    //                 contacts={visibleContacts}
    //                 onClick={this.handleDelete}
    //             />
    //         </StyledDiv>
    //     );
    // };
}

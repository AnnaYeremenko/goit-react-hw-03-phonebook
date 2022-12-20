import { PropTypes } from 'prop-types';
import { ButtonDelete, ContactItem, ListContact } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ListContact>
            {contacts.map((contact, id) => (
                <ContactItem key={id}>
                    {contact.name} : {contact.number}
                    <ButtonDelete type="button" onClick={() => onDelete(contact.id)}>
                        Delete
                    </ButtonDelete>
                </ContactItem> 
            ))}
        </ListContact>
    );
};
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isReqyired,
            name: PropTypes.string.isReqyired,
            number: PropTypes.string.isReqyired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};
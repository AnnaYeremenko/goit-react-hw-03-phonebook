import { PropTypes } from 'prop-types';
import { Form, InputTitle, InputText, Button} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
    const handleSubmit = event => {
        const { name, number } = event.target.elements;
        event.preventDefault();
        onSubmit(name.value, number.value);
        event.target.reset();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <InputTitle>Name </InputTitle>
            <InputText
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <InputTitle>Number </InputTitle>
          <InputText
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
            <Button type="submit">Add contact</Button>

        </Form>
    );
};
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
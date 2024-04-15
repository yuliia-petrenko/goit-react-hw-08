import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactsList.module.css';

 const ContactsList =() =>{
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.listItem}>
            {contacts.map(item => (
                <li key={item.id} className={css.item}>
                    <Contact data={item} />
                </li>
            ))}
        </ul>
    );
}
export default ContactsList;
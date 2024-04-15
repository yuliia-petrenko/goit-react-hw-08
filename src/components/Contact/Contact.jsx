import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

const Contact=({ data: { name, number, id  } }) =>{
    const dispatch = useDispatch();

    return (
        <div className={css.wrap}>
            <div className={css.contact}>
                <div className={css.name}>
                    <FaUser />
                    <p>{name}</p>
                </div>
                <div className={css.phone}>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </div>
            </div>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    );
}
export default Contact;
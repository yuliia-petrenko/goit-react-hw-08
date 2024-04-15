import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const initualValues = {
    name: '',
    number: '',
};
const nameReg = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberReg =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;


const ContactSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
        .matches(
            nameReg,
            'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer',
        ),
    number: yup.string()
        .min(3)
        .max(50, 'Too Long!')
        .required('Required')
        .matches(numberReg, 'Mobile phone number must have 8 digits'),
});



const nameFieldId = nanoid();
const numberFieldId = nanoid();

 const ContactForm =() => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const contact = {
            // id: nanoid(),
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(contact));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initualValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.field}>
                    <label className={css.label} htmlFor={nameFieldId}>
                        Name
                    </label>
                    <Field type="text" name="name" id={nameFieldId} />
                </div>
                <ErrorMessage
                    className={css.error}
                    name="name"
                    component="span"
                />
                <div className={css.field}>
                    <label className={css.label} htmlFor={numberFieldId}>
                        Number
                    </label>
                    <Field type="text" name="number" id={numberFieldId} />
                </div>
                <ErrorMessage
                    className={css.error}
                    name="number"
                    component="span"
                />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}
export default ContactForm;
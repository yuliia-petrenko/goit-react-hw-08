import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as yup from 'yup';
import { useId } from 'react';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const passwordRules = /^[a-zA-Z]{7,20}$/;

const RegesterSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'Too Short! Min 3 symbols')
        .max(15, 'Too Long! Max 50 symbols')
        .required('Required')
        .matches(
            nameRegExp,
            'Name may contain only letters, apostrophe, dash and spaces.',
        ),
    email: yup.string()
        .email('Please, enter a valid email')
        .required('Required'),
    password: yup.string()
        .matches(passwordRules, {
            message:
                'Please create a stronger password. It must be between 7 and 20 characters long and contain only letters.',
        })
        .required('Required'),
});

const initualValues = {
    name: '',
    email: '',
    password: '',

};

 const RegistrationForm= () => {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(register(values))
            .unwrap()
            .then(() =>
                toast.success(
                    `Account was created! Welcome to your ContactBook!`,
                ),
            )
            .catch(() =>
                toast.error(
                    'Maybe this user is already created. Try another name or email!',
                ),
            );
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initualValues}
            onSubmit={handleSubmit}
            validationSchema={RegesterSchema}
        >
            <Form className={css.form} autoComplete="off">
                <div>
                    <label className={css.label} htmlFor={nameId}>
                        Username
                        <Field
                            type="text"
                            name="name"
                            id={nameId}
                            autoComplete="off"
                        />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="name" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label} htmlFor={emailId}>
                        Email
                        <Field
                            type="email"
                            name="email"
                            id={emailId}
                            autoComplete="off"
                        />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="email" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label} htmlFor={passwordId}>
                        Password
                        <Field
                            type="password"
                            name="password"
                            id={passwordId}
                            autoComplete="off"
                        />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="password" as="span" />
                    </span>
                </div>
                <button type="submit" className={css.registrationBtn}>
                    Registration
                </button>
            </Form>
        </Formik>
    );
}
export default RegistrationForm;
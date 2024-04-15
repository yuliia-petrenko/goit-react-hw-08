import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import * as yup from 'yup';
import { useId } from 'react';
import toast from 'react-hot-toast';

const initualValues = {
    email: '',
    password: '',
};
const passwordRules = /^[a-zA-Z]{7,20}$/;

const LogInSchema = yup.object().shape({
    email: yup.string()
        .email('Please, enter a valid email')
        .required('Required'),
    password: yup.string()
        .matches(passwordRules, { message: 'Invalid password' })
        .required('Required'),
});


 const LoginForm = () => {
    const emailId = useId();
    const passwordId = useId();

    const dispatch = useDispatch();

    const handleSubmit = async (values, actions) => {
        try {
            await dispatch(logIn(values)).unwrap();
            toast.success('Login is successful');
            actions.resetForm();
        } catch (error) {
            toast.error('Wrong password or email. Try again');
        }
    };

    return (
        <Formik
            initialValues={initualValues}
            onSubmit={handleSubmit}
            validationSchema={LogInSchema}
        >
            <Form className={css.form}>
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
                </div>

                <button className={css.loginBtn} type="submit">
                    Log In
                </button>
            </Form>
        </Formik>
    );
}
export default LoginForm;
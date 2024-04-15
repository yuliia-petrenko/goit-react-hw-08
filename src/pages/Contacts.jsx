import { useDispatch, useSelector } from 'react-redux';
import ContactsList from '../components/ContactsList/ContactsList';
import PageTitle from '../components/PageTitle/PageTitle';
import { selectIsLoading } from '../redux/contacts/selectors';
import Loader from '../components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';
import Section from '../components/Section/Section';
import css from './Contacts.module.css';

export default function Contacts() {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <Section>
            <PageTitle>Your Contact Book</PageTitle>
            <div className={css.book}>
                <ContactForm />
                <SearchBox />
            </div>
            <ContactsList />
            {isLoading && <Loader />}
        </Section>
    );
}

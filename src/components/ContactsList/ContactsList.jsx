import { useEffect } from 'react';
import IconButton from '../IconButton/IconButton';
import { useSelector, useDispatch} from 'react-redux';
import { ReactComponent as DeleteIcon } from 'icon/delete.svg';
import {contactsOperations, contactsSelectors } from 'redux/contacts';
import s from './ContactsList.module.css';


const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContact);
  const dispatch = useDispatch();
  
useEffect(() =>
    dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
  <>
    {
      contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.contact}>
              {name}: {number}
              <IconButton
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
                aria-label="Delete contact"
              >
                <DeleteIcon width="30" height="30" />
              </IconButton>
            </li>
          ))}
        </ul>
      )
      }
      </>
  );
};

export default ContactsList;




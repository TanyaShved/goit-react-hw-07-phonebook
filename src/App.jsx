import Pnonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const App = () => { 
  return (
      <>
        <Pnonebook
          title="Pnonebook"
        />
        <Contacts title="Contacts">
          <Filter
            title="Find contacts by name"
          />
          <ContactsList/>
        </Contacts> 
      </>
    );
}

export default App;

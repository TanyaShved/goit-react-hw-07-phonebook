export const getContacts = state => state.contacts.items;

export const getValue = state => state.contacts.filter;

export const getFilteredContact = state => {
    const contacts = getContacts(state);
    const filter = getValue(state);

    const normalizedFilter = filter.toLowerCase();
 
      return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
};

    






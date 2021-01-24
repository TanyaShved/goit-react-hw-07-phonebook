import axios from 'axios';

const BASE_URL = 'http://localhost:4040';

export async function fetchContacts() {
    const { data } = await axios.get(`${BASE_URL}/contacts`)
    return data;
}

export async function addContact(contact) {
    return await axios.post(`${BASE_URL}/contacts`, contact);
};

export async function deleteContact(id) {
    return await axios.delete(`${BASE_URL}/contacts/${id}`)
};

const contactApi = { fetchContacts, addContact, deleteContact };

export default contactApi;

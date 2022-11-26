import { ContactsList } from 'components/ContactsList/ContactsList';
import { Table, Thead, Th } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Name</Th>
          <Th>Number</Th>
          <Th></Th>
        </tr>
      </Thead>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </Table>
  );
};

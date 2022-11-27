import { ContactsList } from 'components/ContactsList/ContactsList';
import { Table, Thead, Th } from './Contacts.styled';

export const Contacts = ({
  contacts,
  deleteContact,
  renameContact,
  userUpdate,
  onSubmit,
}) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Name</Th>
          <Th>Number</Th>
          <Th>Rename</Th>
          <Th>Delete</Th>
        </tr>
      </Thead>
      <ContactsList
        contacts={contacts}
        deleteContact={deleteContact}
        renameContact={renameContact}
        userUpdate={userUpdate}
        onSubmit={onSubmit}
      />
    </Table>
  );
};

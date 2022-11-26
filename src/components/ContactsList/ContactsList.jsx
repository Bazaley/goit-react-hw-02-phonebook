import { Tr, Td, Button } from './Contacts.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <tbody>
      {contacts.map(({ id, name, number }) => {
        return (
          <Tr key={id}>
            <Td>{name}</Td>
            <Td>{number}</Td>
            <Td>
              <Button onClick={deleteContact}>delete</Button>
            </Td>
          </Tr>
        );
      })}
    </tbody>
  );
};

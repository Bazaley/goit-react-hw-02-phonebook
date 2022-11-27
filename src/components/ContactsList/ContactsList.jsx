import { Tr, Td, Button } from './ContactsList.styled';
import UpdateContact from '../UpdateContact/UpdateContact';

export const ContactsList = ({
  contacts,
  deleteContact,
  renameContact,
  userUpdate,
  onSubmit,
}) => {
  return (
    <tbody>
      {contacts.map(({ id, name, number }) => {
        return (
          <Tr key={id}>
            <Td>
              {userUpdate === name ? (
                <UpdateContact name={name} id={id} onSubmit={onSubmit} />
              ) : (
                name
              )}
            </Td>
            <Td>{number}</Td>
            <Td>
              <Button data-id={id} rename onClick={renameContact}>
                rename
              </Button>
            </Td>
            <Td>
              <Button data-id={id} onClick={deleteContact}>
                delete
              </Button>
            </Td>
          </Tr>
        );
      })}
    </tbody>
  );
};

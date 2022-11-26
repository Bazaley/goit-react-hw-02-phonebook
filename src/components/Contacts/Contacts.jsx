export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={deleteContact} data-id={id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
